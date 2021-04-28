describe('calculateTaxes', function(){
    it('should calculate high tax bracket', function(){
        expect(calculateTaxes(45000)).toEqual(11250);
        expect(calculateTaxes(100000)).toEqual(25000);
    });
    
    it('should calculate low tax bracket', function(){
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(1000)).toEqual(150);
    });

    it('should reject invalid inputs', function(){
        expect(function(){calculateTaxes('hello')}).toThrowError();
        expect(function(){calculateTaxes([1,2,3])}).toThrowError();
        expect(function(){calculateTaxes(true)}).toThrowError();
    })
});

describe('removeDupes', function(){
    it('should remove duplicates array', function(){
        expect(removeDupes([1,1,1,2,3,3,4,4,5,6,7,7,7])).toEqual([1,2,3,4,5,6,7]);
    });
    
    it('should remove duplicates string', function(){
        expect(removeDupes('hello')).toBe('helo');
        expect(removeDupes('hello')).toBeInstanceOf(String);
    });
});

describe('remove', function(){
    it('should remove value from array', function(){
        expect(remove([1,2,3,4,5,6], 6)).not.toContain(6);
    })
});

describe('submitForm',function(){
    it('saves input value to array', function(){
        nameInput.value = 'zach';
        submitForm();
        expect(usernames.length).toBe(1);
        expect(usernames).toContain('zach');
    })

    it('saves long usernames', function(){
        nameInput.value = 'I_love_turtles_and_trains_and_pandas';
        submitForm();
        expect(usernames.length).toBe(1);
    })
})

afterEach(function(){
    nameInput.value = '';
    usernames = [];
})