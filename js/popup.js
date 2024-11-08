// Lists of video sources and descriptions associated with each feature content item
const videoSources = [
    "/vid/display_all_cat_indi.mp4",
    "/vid/search_artstore.mp4",
    "/vid/add_items_to_cart_artstore.mp4",
    "/vid/update_qty_artstore.mp4",
    "/vid/delete_indivi_artstore.mp4",
    "/vid/delete_all_artstore.mp4",
    "/vid/contact_artstore.mp4"
  ];
  
  const descriptions = [
    "Home Page display all avalibale page, catergory page display all product that is in the same catergory and click on specific product to display indivaul products and its details.",
    "Search-bar that can search for product related to what users serach or for specific product. If no result, display nothing.",
    "Add a product from product table to cart table with SQL, no product image is dispalyed when nothing is in the cart. ",
    "Update quantity of one product in cart.",
    "Delete products individually when X button in each individual product container is pressed",
    "Click on 'make purchase' to go to receipt page showing total items bought and teh total price, delete all products from cart after confrimg purchase.",
    "Display dynamic message containg uesrs name in contact page when form is submitted."
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
  