describe("lotto", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  context("구입 금액 입력", () => {
    [1000, 1300, 1500, 3000].forEach((money) => {
      const lottoCnt = Math.floor(money / 1000);
      it(`${money} 입력 시 ${lottoCnt}장을 구입했다고 알린다.`, () => {
        cy.get(".money-input").type(money.toString());
        cy.get(".money-submit").click();

        cy.get(".purchase-result-text").should("contain.text", lottoCnt);
      });

      it(`${money} 입력 시 ${lottoCnt}개의 이미지가 생성된다.`, () => {
        cy.get(".money-input").type(money.toString());
        cy.get(".money-submit").click();

        cy.get(".lotto-img").should("have.length", lottoCnt);
      });
    });

    it("input 창의 enter 입력으로도 구입이 가능하다.", () => {
      cy.get(".money-input").type("1000").type("{enter}");

      cy.get(".purchase-result-text").should("contain.text", 1);
      cy.get(".lotto-img").should("have.length", 1);
    });

    it("구입 금액을 입력해야 결과창과 당첨번호 입력란이 출력된다.", () => {
      cy.get(".purchase-result").should("have.class", "hidden");
      cy.get(".winning-numbers-form").should("have.class", "hidden");
      cy.get(".money-input").type("1000").type("{enter}");

      cy.get(".purchase-result").should("not.have.class", "hidden");
      cy.get(".winning-numbers-form").should("not.have.class", "hidden");
    });
  });
});
