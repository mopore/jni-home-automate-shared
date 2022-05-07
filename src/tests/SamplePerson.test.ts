import { SamplePerson } from "./SamplePerson";

describe("Sample testing with Jest", () => {
  describe("SamplePerson", () => {

    const person = new SamplePerson();
    // Mocking the age property
    jest.spyOn(person, 'age', 'get').mockReturnValueOnce(39).mockReturnValue(41);
    // Mocking the speak function of sample person
    person.speak = jest.fn( (): string =>  
      "Mocked string"  
    );

    describe("name", () => {
      it("Should be named Jens per default", () => {
        expect(person.name).toEqual("Jens");
      });
    })
    describe("age", () => {
      it("Should be 39 years per mocking", () => {
        expect(person.age).toEqual(39);
      });
      it("Should be 41 years after second call", () => {
        expect(person.age).toEqual(41);
      });
      it("Should be larger than 0", () => {
        expect(person.age > 0).toBeTruthy();
      });
    });

    describe("speak", () => {
      it("should be mocked", () => {
        expect(person.speak()).toEqual("Mocked string");
      });
    });
  });
});
