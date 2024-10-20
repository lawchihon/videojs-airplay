'use strict';

var expect = require('expect.js');

const createAirPlayButton = require('../src/js/components/AirPlayButton');

class ButtonComponentStub {}

describe('AirPlayButton', function() {
   it('should not call videojs.extend', function() {
      const videoJsSpy = {
         extend: function() {
            expect().fail('videojs.extends is deprecated');
         },
         getComponent: function() {
            return ButtonComponentStub;
         },
         registerComponent: function(_, component) {
            expect(component.prototype instanceof ButtonComponentStub).to.be(true);
         },
      };

      createAirPlayButton(videoJsSpy);
   });
});
