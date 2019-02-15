angular.module('productApp', ['ngAnimate', 'ngTouch'])
    .controller('MainCtrl', function ($scope) {
        $scope.products = [
            {
              image0: 'images/img00.jpeg',
              image1: 'images/img01.jpeg',
              image2: 'images/img02.jpeg',
              image3: 'images/img03.jpeg',
              image4: 'images/img04.jpeg',
              name: 'Raw Marble Object',
              sku: 'DO001',
              description: 'Image 00',
              summary: 'Rock Formation. Marble in its most natural state. Unpolished, unfinished and undeniably beautiful.',
              moresummary: 'Each piece will be completely unique in shape, color and texture. Raw Marble Object. 5 inches dia.',
              details: [
                { list: 'Marble' },
                { list: 'Each will be unique' },
                { list: 'Wipe with a soft cloth' },
                { list: 'Made in Vietnam' }
              ]
            },
            {
              image0: 'images/img10.jpeg',
              image1: 'images/img11.jpeg',
              image2: 'images/img12.jpeg',
              image3: 'images/img13.jpeg',
              image4: 'images/img14.jpeg',
              name: 'Sur Reactive Vase',
              sku: 'CV002',
              description: 'Image 10',
              summary: 'Dark Waters. Teardrop-shaped ceramic vase holds fresh greenery and stems in moody blue hues.',
              moresummary: 'Deep blue reactive glaze washes over top, finishing each piece unique.',
              details: [
                { list: 'Overall Dimensions: Height: 8.75 X Diameter: 6' },
                { list: 'Ceramic with dark blue reactive glaze' },
                { list: 'Each will be unique' },
                { list: 'Wipe with a soft cloth' },
                { list: 'Made in Vietnam' }
              ]
            },
            {
              image0: 'images/img20.jpeg',
              image1: 'images/img21.jpeg',
              image2: 'images/img22.jpeg',
              image3: 'images/img23.jpeg',
              image4: 'images/img24.jpeg',
              name: 'Fuel Navy Credenza',
              sku: 'FS003',
              description: 'Image 20',
              summary: 'Blue Room. Clean lines in glossy navy lacquer span almost five feet to broaden storage options.',
              moresummary: 'Low-profile frame with expansive top can even pedestal a widescreen. Two clean-front doors hide two adjustable A/V-ready shelves (one on each side) with a gap and cutouts for cord management. Engineered wood case floats on slim steel L feet in brushed nickel-plated finish.',
              details: [
                { list: 'Low-emission engineered wood with hi-gloss navy finish'},
                { list: 'Steel L feet with a brushed nickel-plated finish'},
                { list: 'Top holds TV or stereo up to 50 lbs. evenly distributed'},
                { list: 'Shelves have built-in gaps for cords; back has cord cutouts'},
                { list: 'Clean with a soft, dry cloth'},
                { list: 'Made in Vietnam'}
              ]
            },
            {
              image0: 'images/img30.jpeg',
              image1: 'images/img31.jpeg',
              image2: 'images/img32.jpeg',
              image3: 'images/img33.jpeg',
              image4: 'images/img34.jpeg',
              name: 'Rush Brushed Gold Flatware Set',
              sku: 'TW004',
              description: 'Image 30',
              summary: 'Gold Diggers. Get a hold on gold at the table. Flatware is forged with substantial heft in 18/0 stainless steel (13/0 for the knife) with a gold-colored finish.',
              moresummary: 'Matte finish handles contrast gleaming polished heads. Five-piece settings dine a party of four.',
              details: [
                { list: '18/0 forged stainless steel' },
                { list: 'Gold finish with matte handles' },
                { list: 'Hand wash' },
                { list: 'Hand drying is recommended to prevent discoloration and film build-up' },
                { list: 'Made in Vietnam' }
              ]
            },
            {
              image0: 'images/img40.jpeg',
              image1: 'images/img41.jpeg',
              image2: 'images/img42.jpeg',
              image3: 'images/img43.jpeg',
              image4: 'images/img44.jpeg',
              name: 'Bondi Mosaic Wall Decor',
              sku: 'HD005',
              description: 'Image 40',
              summary: 'Earth And Sky. Abstract landscape is crafted from strips of natural water hyacinth.',
              moresummary: 'Fibers are dyed an earthy spectrum of blue, black, gold and red then folded into triangular shapes and arranged into the conceptual mosaic you see here. We love the texture it adds to any space.',
              details: [
                { list: 'Water hyacinth and engineered wood' },
                { list: 'Each will be unique' },
                { list: 'Different wall materials may require different types of fasteners; use fasteners suitable for the walls in your home' },
                { list: 'Dust with soft, dry cloth' },
                { list: 'Made in Vietnam' }
              ]
            },
            {
              image0: 'images/img50.jpeg',
              image1: 'images/img51.jpeg',
              image2: 'images/img52.jpeg',
              image3: 'images/img53.jpeg',
              image4: 'images/img54.jpeg',
              name: '4 Star Pillar Candle Holders',
              sku: 'CH006',
              description: 'Image 50',
              summary: 'Point Made. Cast aluminum pillar candle holder makes strong sculptural statement in antique brass finish.',
              moresummary: 'Attention-grabbing from every angle.',
              details: [
                { list: 'Cast aluminum with antiqued brass finish' },
                { list: 'Each will be unique' },
                { list: 'Max pillar candle height: 6"' },
                { list: 'Clean with a soft cloth' },
                { list: 'Made in Vietnam' }
              ]
            },
            {
              image0: 'images/img60.jpeg',
              image1: 'images/img61.jpeg',
              image2: 'images/img62.jpeg',
              image3: 'images/img63.jpeg',
              image4: 'images/img64.jpeg',
              name: 'Artemis Round Dining Table',
              sku: 'WD007',
              description: 'Image 60',
              summary: 'Feast Al Fresco. Designer Jannis Ellenberger explores the beauty of a spare, simple form. Defined by planes and angles, the architectural profile is elevated by a the rich tones of 100% acacia wood with a natural oiled finish that will naturally patina and lighten over time.',
              moresummary: 'Unique angled legs support a slatted surface with built-in umbrella hole and room to seat 4. Makes the perfect dining companion with the Artemis Dining Chairs and Bench.',
              details: [
                { list: 'Acacia wood with galvanized steel hardware' },
                { list: 'Wood will naturally patina and age with time' },
                { list: 'Outdoor-safe; cover or store indoors during inclement weather and when not in use.' },
                { list: 'Clean with a soft damp cloth; no abrasive cleaners' },
                { list: 'Made in Vietnam' }
              ]
            },
            {
              image0: 'images/img70.jpeg',
              image1: 'images/img71.jpeg',
              image2: 'images/img72.jpeg',
              image3: 'images/img73.jpeg',
              image4: 'images/img74.jpeg',
              name: 'Daphne Glass Appetizer Plate Set Of 8',
              sku: 'GD008',
              description: 'Image 70',
              summary: 'Fresh Start. Decorative pressed-glass appetizer plates dish small bites with vintage attitude.',
              moresummary: 'Layer with your dinnerware for a fresh take on everyday. Pair with Daphne Low Glass Bowl.',
              details: [
                { list: '7.5" dia. x 1"H' },
                { list: 'Soda lime glass' },
                { list: 'Dishwasher- and microwave-safe' },
                { list: 'Made in Vietnam' }
              ]
            },
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.products.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.products.length - 1;
        };
    });
