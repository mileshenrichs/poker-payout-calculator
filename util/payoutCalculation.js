const calculatePayouts = (playersList) => {
  const players = transformPlayerInput(playersList);
  const payouts = [];

  // build winners and losers lists
  let winners = [];
  let losers = [];

  players.forEach(player => {
    if(player.winnings < 0) {
      losers.push({
        name: player.name,
        owed: -player.winnings
      });
    } else if(player.winnings > 0) {
      winners.push({
        name: player.name,
        winningsRemaining: player.winnings
      });
    }
  });

  while(winners.length && losers.length) {
    // payout to winners, each loser at a time
    const currentLoser = losers[0];
    for(let i = 0; i < winners.length; i++) {
      const currentWinner = winners[i];
      const payout = Math.min(currentLoser.owed, currentWinner.winningsRemaining);

      if(payout > 0) {
        // announce payout
        console.log(currentLoser.name + ' should Venmo ' + currentWinner.name + ' $' + payout);
        payouts.push({
          from: currentLoser.name,
          to: currentWinner.name,
          payout
        })

        // subtract payments from both sides
        losers[0].owed = parseFloat((losers[0].owed - payout).toFixed(2));
        winners[i].winningsRemaining = parseFloat((winners[i].winningsRemaining - payout).toFixed(2));

        // remove players from list if all losses paid/all winnings received
        if(losers[0].owed === 0) {
          losers = losers.slice(1);
        }
        if(winners[i].winningsRemaining === 0) {
          winners = winners.slice(0, i).concat(winners.slice(i + 1));
          i--;
        }
      }
    }
  }
  return payouts;
}

const transformPlayerInput = (originalList) => {
  return originalList.map(player => ({
    name: player.name,
    winnings: getWinningsFromPlayer(player.isWinner, player.moneyDifference)
  }))
}

const getWinningsFromPlayer = (isWinner, moneyDifference) => {
  return isWinner ? moneyDifference : -moneyDifference;
}

exports.calculatePayouts = calculatePayouts;