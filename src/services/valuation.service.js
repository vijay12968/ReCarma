exports.calculateValuation = (year, conditionScore) => {
  const basePrice = 50000;
  const agePenalty = (new Date().getFullYear() - year) * 2000;
  const conditionPenalty = (10 - conditionScore) * 1500;

  return Math.max(basePrice - agePenalty - conditionPenalty, 5000);
};
