describe("the greet function",function(){
    it("should greet Lindani with 'Hello,Lindani'",function(){
    assert.equal("Hello,Lindani",greet("Lindani"));
    });

    it("should greet Zola with 'Hello,Zola'",function(){
       assert.equal("Hello,Zola",greet("Zola"));
    });
});