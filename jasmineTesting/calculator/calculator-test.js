it('should calculate the monthly rate correctly', function () {
  const values = {amount: 300000, years: 30, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('1610.46');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 299914, years: 30, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('1610.00');
});

it('should handle very low interest rates', function(){
  const values = {amount:10000, years: 10, rate: 0};
  expect(calculateMonthlyPayment(values)).toEqual('83.33');
});

it('should handle very high interest rates', function(){
  const values = {amount:10000, years: 10, rate: 100}
  expect(calculateMonthlyPayment(values)).toEqual('833.39');
});
