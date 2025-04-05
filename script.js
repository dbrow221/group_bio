/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    if (bio) {
        bio.style.display = (bio.style.display === "none" || bio.style.display === "") ? "block" : "none";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    if (biosSection && visionSection) {
        if (sectionId === "bios") {
            biosSection.style.display = "block";
            visionSection.style.display = "none";
        } else if (sectionId === "vision") {
            biosSection.style.display = "none";
            visionSection.style.display = "block";
        }
    }
}
