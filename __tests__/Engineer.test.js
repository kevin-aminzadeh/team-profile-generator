// Engineer Class Unit Tests

// Import Engineer class
const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  // Test getName() method
  describe("getName method", () => {
    it("should return the Engineer's name", () => {
      const engineer = new Engineer(
        1,
        "James Smith",
        "james@email.com",
        "gitHubUsername"
      );

      expect(engineer.getName()).toBe(engineer.name);
    });
  });

  // Test getID() method
  describe("getID method", () => {
    it("should return the Engineer's id", () => {
      const engineer = new Engineer(
        3,
        "Jane Doe",
        "jane@email.com",
        "gitHubUsername"
      );

      expect(engineer.getId()).toBe(engineer.id);
    });
  });

  // Test getEmail() method
  describe("getEmail method", () => {
    it("should return the Engineer's email", () => {
      const engineer = new Engineer(
        1,
        "James Smith",
        "james@email.com",
        "gitHubUsername"
      );

      expect(engineer.getEmail()).toBe(engineer.email);
    });
  });

  // Test getGithub() method
  describe("getGithub method", () => {
    it("should return the Engineer's GitHub username", () => {
      const engineer = new Engineer(
        1,
        "James Smith",
        "james@email.com",
        "gitHubUsername"
      );

      expect(engineer.getGithub()).toBe(engineer.github);
    });
  });

  // Test getRole() method
  describe("getRole method", () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer(
        1,
        "James Smith",
        "james@email.com",
        "gitHubUsername"
      );

      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
