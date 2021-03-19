// Manager Class Unit Tests

// Import Manager class
const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  // Test getName() method
  describe("getName method", () => {
    it("should return the Manager's name", () => {
      const manager = new Manager(1, "James Smith", "james@email.com", 34);

      expect(manager.getName()).toBe(manager.name);
    });
  });

  // Test getID() method
  describe("getID method", () => {
    it("should return the Manager's id", () => {
      const manager = new Manager(3, "Jane Doe", "jane@email.com", 34);

      expect(manager.getId()).toBe(manager.id);
    });
  });

  // Test getEmail() method
  describe("getEmail method", () => {
    it("should return the Manager's email", () => {
      const manager = new Manager(1, "James Smith", "james@email.com", 34);

      expect(manager.getEmail()).toBe(manager.email);
    });
  });

  // Test getRole() method
  describe("getRole method", () => {
    it('should return "Manager"', () => {
      const manager = new Manager(1, "James Smith", "james@email.com", 34);

      expect(manager.getRole()).toBe("Manager");
    });
  });
});
