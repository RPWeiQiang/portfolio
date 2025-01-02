// Lists of video sources and descriptions associated with each feature content item
const videoSources = [
    "vid/Travel-Add.mp4",
    "vid/Travel-Display.mp4",
    "vid/Travel-Delete.mp4",
    "vid/Travel-Clear.mp4",
    "vid/Travel-Search.mp4",
  ];
  
  const descriptions = [
    "Adds in description and quantity of the item in a list,user can choose to mark an item as important before adding the item ",
    "Displays all items added to the list, items marked as important would be at the front of the list. Checked item would be moved to the back of the list. Progress based on number of packed item is tracked and displayed",
    "Delete item in the list individually",
    "Users can choose delete all item from list all just delete only checked off items at one go.",
    "Search for items users need base on the full item name for part of it "
  ];
  
  // Select all elements with the class 'feature-content'
  document.querySelectorAll('.feature-content').forEach((item, index) => {
    item.addEventListener('click', () => {
      const modal = document.querySelector('#feature-modal');
      const modalText = document.querySelector('#modal-text');
      const modalVideo = document.querySelector('#modal-video');
  
      // Set the description text and video source based on the item clicked
      modalText.textContent = descriptions[index];
      modalVideo.src = videoSources[index];
  
      // Show the modal dialog
      modal.showModal();
    });
  });
  
  // Function to close the modal
  function closeModal() {
    const modal = document.querySelector('#feature-modal');
    const modalVideo = document.querySelector('#modal-video');
    
    // Pause the video and clear the src to stop it when closing the modal
    modalVideo.pause();
    modalVideo.src = "";
    
    // Close the modal
    modal.close();
  }
  