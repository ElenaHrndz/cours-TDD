describe('test', () => {
    describe('sum', () =>{
        it('sum 2 numbers', () => {
            const sum = (a,b) => {
                return a + b
            }
            expect(sum (1,2)).toEqual(3)
        })
    })
})