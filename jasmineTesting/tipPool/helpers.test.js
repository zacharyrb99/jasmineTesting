describe('Helpers tests',function(){
    beforeEach(function(){
        billAmtInput.value = 240;
        tipAmtInput.value = 50;
        submitPaymentInfo();
    });

    it('should sum total of tips', function(){
        expect(sumPaymentTotal('tipAmt')).toBe(50);

        billAmtInput.value = 500;
        tipAmtInput.value = 120;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toBe(170)
    });

    it('should sum total of bills', function(){
        expect(sumPaymentTotal('billAmt')).toBe(240);

        billAmtInput.value = 500;
        tipAmtInput.value = 120;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('billAmt')).toBe(740);  
    });

    it('should sum tip percent', function(){
        expect(calculateTipPercent(500, 120)).toBe(24);
        expect(calculateTipPercent(240, 50)).toBe(21);
    });

    afterEach(function(){
        tipAmtInput.value = '';
        billAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});