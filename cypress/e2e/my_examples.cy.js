describe('cuentas', function(){
    var a = 1+1;
    var b = 2;
    it('confirmacion de suma', function(){
        expect(a==b).to.equal(true);
    });
    it('confirmacion de resta', function(){
        expect(a-b).to.equal(0);
    });
})