describe('Payments Tests', function(){
    beforeEach(function(){
        billAmtInput.value = 240;
        tipAmtInput.value = 50;
    });

    it('should add the payment', function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toBe(1);
        expect(allPayments['payment1'].billAmt).toBe('240');
        expect(allPayments['payment1'].tipAmt).toBe('50');
        expect(allPayments['payment1'].tipPercent).toBe(21);
    });

    it('should create payment', function(){
        let payment = {billAmt: '240', tipAmt: '50', tipPercent: 21};
        expect(createCurPayment()).toEqual(payment);
    });

    it('should append to payment table', function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toBe('$240');
        expect(curTdList[1].innerText).toBe('$50');
        expect(curTdList[2].innerText).toBe('%21');
        expect(curTdList[3].innerText).toBe('delete');
    });

    it('should test the shift summary', function(){
        expect(summaryTds[0].innerText).toBe('$240');
        expect(summaryTds[1].innerText).toBe('$50');
        expect(summaryTds[2].innerText).toBe('21%');
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0] = '';
        summaryTds[1] = '';
        summaryTds[2] = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});

