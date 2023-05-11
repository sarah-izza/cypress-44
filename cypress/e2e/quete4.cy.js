describe("File upload and download tests", () => {
    beforeEach(() => {
      cy.visit("https://filebin.net/");
    });
  
    it("Upload file and download it in Zip format", () => {
      cy.get("#fileField").attachFile("myCuteCat.jpg");
      cy.contains("It contains 1 uploaded file").should("be.visible");
      cy.contains("Download files").click();
      cy.contains("Zip")
        .invoke("attr", "href")
        .then((downloadLink) => {
          const absulteLink = "https://filebin.net/" + downloadLink;
          cy.log(absulteLink);
          cy.downloadFile(
            absulteLink,
            "mydownloads/zipFiles",
            "downloadedFromCypress.zip"
          );
          cy.readFile("mydownloads/zipFiles/downloadedFromCypress.zip");
        });
    });
  
    it("Upload file and download it in Tar format", () => {
      cy.get("#fileField").attachFile("myCuteCat.jpg");
      cy.contains("It contains 1 uploaded file").should("be.visible");
      cy.contains("Download files").click();
      cy.contains("Tar")
        .invoke("attr", "href")
        .then((downloadLink) => {
          const absulteLink = "https://filebin.net/" + downloadLink;
          cy.log(downloadLink);
          cy.downloadFile(
            absulteLink,
            "mydownloads/tarFiles",
            "downloadedFromCypress.tar"
          );
          cy.readFile("mydownloads/tarFiles/downloadedFromCypress.tar");
        });
    });
  });