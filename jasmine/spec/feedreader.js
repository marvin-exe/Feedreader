/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('should have feed url defined and not empty', function(){
           for (feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }
         })


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('should have name defined and not empty', function(){
           for (feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           }
         });
    });


    /* Write a new test suite named "The menu" */
    describe('The menu', function(){
      let BODY = $('body'), MENU_BUTTON = $('.menu-icon-link');


        /* Test that ensures the menu element is
         * hidden by default.
         */
         it('should hidemenu by default', function(){
           expect(BODY.hasClass('menu-hidden')).toBeTruthy();
         });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('should show menu when clicking icon and hide it when clicked again', function(){
            MENU_BUTTON.click();
            expect(BODY.hasClass('menu-hidden')).toBeFalsy();

            MENU_BUTTON.click();
            expect(BODY.hasClass('menu-hidden')).toBeTruthy();
          })

      })

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function(){
      beforeEach(function(done){
        loadFeed(0, function(){
          done();
        });
      });

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         it('should loadFeed and print the entry and .feed container', function(){
           expect($('.feed .entry').length).not.toBe(0);
         });
       });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
      let initialFeedHtml

      beforeEach(function(done){
        loadFeed(0, function(){
          initialFeedHtml = $('.feed').html();

          loadFeed(1, function(){
            done();
          });
        });
      });

      it('should load new feed', function(done){
        let newFeedHtml = $('.feed').html();
        expect(newFeedHtml).not.toBe(initialFeedHtml);
        done();
      });
    });
}());
