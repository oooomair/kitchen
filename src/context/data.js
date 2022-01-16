import w1 from '../assets/w1.jpg'
import w2 from '../assets/w2.jpg'
import w3 from '../assets/w3.jpg'
import w4 from '../assets/w4.jpg'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import i1 from '../assets/i1.jpg'
import i2 from '../assets/i2.jpg'
import i3 from '../assets/i3.jpg'
import i4 from '../assets/i4.jpg'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'


const data = [
    {
        _id: 1,
        title : 'Winter',
        fire: 'Comfort',
        desc : 'In winter, our body craves for rich food which provides warmth along with nourishment. We need warming foods to satisfy this craving, so here are some you can make right in the comfort of your kitchen',
        foods: [
            {
                _id: 1,
                image: w1,
                title: 'Winter minestrone soup',
                desc: "I've never confined minestrone to the colder months, but in winter it takes on such a nourishing and warming role. For me, winter minestrone is all about root vegetables, winter greens, dried beans and pasta and an intense broth with real depth of flavour",
                ingredients: `125g small dried haricot or cannellini beans, soaked overnight (or use 250g drained tinned beans, but add them at the end of the cooking)
                3 carrots, rough 3cm dice
                3 parsnips, rough 3cm dice
                3 white sweet potatoes, rough 3cm dice
                2 tsp fennel seeds
                extra virgin olive oil
                salt flakes and freshly ground black pepper
                2 large brown onions, finely diced
                6 cloves garlic, sliced
                4 celery stalks, diced
                1 bulb fennel, diced
                3cm-thick piece pancetta, diced
                1 fresh bay leaf
                3 sprigs thyme
                3 tbsp tomato paste
                10cm piece parmesan rind (optional)
                1.5 litres quality chicken stock, preferably home-made
                200g green beans, cut into 4cm lengths
                1/2 bunch of chard or silverbeet, cut in 2cm widths including most of the stem
                2 handfuls short pasta
                grated parmesan, to serve
                kale (optional, see tips at bottom of recipe)`,
                method: `1. Preheat the oven to 200C (180C fan-forced).

                2. Cook the soaked beans in simmering water for 20 minutes, or until just tender - a little bite here is OK, as they'll be cooked again in the soup.
                
                3. Meanwhile, toss the carrot, parsnip, sweet potato and fennel seeds in oil, season and tip on to a lined baking tray. Roast for 30 minutes.
                
                4. Add a splash of oil to a large heavy-based pot over medium heat. Add the onion, garlic, celery, fennel and pancetta and sweat, stirring frequently, for 15 minutes.
                
                5. Add the bay leaf, thyme and tomato paste to the pot and cook for two minutes while stirring. Add the roasted vegetables, cooked beans, parmesan rind, stock and one litre of water and bring to a simmer. Add the green beans and chard and cook for 15 minutes. Add the pasta for the last eight minutes of cooking. Keep an eye on the level of the liquid. It should be a thick soup but you may have to add a little more water.
                
                6. Once cooked, adjust the seasoning (remove the parmesan rind if you like, but it will keep imparting flavour if you're not serving all the soup at once) and serve with a drizzle of extra virgin olive oil and some grated parmesan.
                
                TIPS
                
                1. Ask at your local deli for a piece of parmesan rind. They will often have some they can give you, or might put some aside for the next time you're in.
                
                2. Roasting the vegetables adds intensity and richness to the soup; they also hold their shape better in the liquid.
                
                3. For an optional garnish, toss some kale leaves in oil and a little salt and dehydrate in a low oven until crunchy.`
            },
            {
                _id: 2,
                image: w2,
                title: 'Braised chicken Pie',
                desc: "This is a succulent wintry dish with a deep umami kick from the dried porcini and layers of flavour from the pancetta, caramelised vegetables, herbs and wine.",
                ingredients: `1 free-range chicken, about 1.6kg, cut in 8
                
                5 sprigs thyme
                
                2 fresh bay leaves
                
                Salt flakes
                
                Freshly ground black pepper
                
                Olive oil
                
                5 thick slices pancetta, sliced into lardons (batons)
                
                5 eschalots, peeled and sliced thickly
                
                8 cloves garlic, smashed, skin on
                
                3 stalks celery, finely diced
                
                1 carrot, finely diced
                
                15g dried porcini, soaked in about 200ml boiling water for about 20 minutes, liquid reserved
                
                300g small Swiss brown mushrooms, cut in half (tiny ones left whole)
                
                300ml dry white wine
                
                500ml chicken stock`,
                method: `1. Strip the leaves from the thyme into a mortar with the bay leaves, salt and black pepper and smash to a paste - you can add a little oil to the herbs to lift them from the mortar. Massage the herbs into the chicken pieces.

                2. In a large wide-based pot, brown the chicken pieces well in oil, season again and reserve. You want good deep colour on the chicken, but be careful not to burn the herbs. This should take 5 or 6 minutes.
                
                3. Add the pancetta to the pot and fry for about 3 minutes until the fat starts to render out and the lardons crisp up. Add the eschalots and the garlic and cook for about 5 minutes, then add the celery and carrot, season with a little salt and pepper and cook for 15 minutes or until the vegetables are caramelised.
                
                4. Add the porcini and the Swiss browns, stir and sweat for about 5 minutes. Add the chicken, porcini liquid and the wine, and simmer for about 6 minutes. Add the stock and cook very gently for 35 minutes or until the meat is tender.
                
                5. Remove the cooked chicken and place in a serving dish. Reduce the braising liquid to your liking, correct the seasoning and pour over the chicken.`
            },
            {
                _id: 3,
                image: w3,
                title: 'Winter herb polenta',
                desc: "Getting the texture of polenta right is not as hard as it might seem. It should be somewhere between soft mashed potato and thick custard, so that it spreads ever so gently on the plate.",
                ingredients: `• 1 litre water (or chicken stock)

                    • 1 cup fine polenta
                    
                    • 75g butter
                    
                    • 100g grated parmesan
                    
                    • 3 sprigs thyme, leaves stripped
                    
                    • 1 tbsp finely chopped flat-leaf parsley
                    
                    • 1 tbsp finely chopped chives
                    
                    • 1 tbsp finely chopped oregano
                    
                    • salt and black pepper, to season`,
                method: `1.Bring the water or stock to the boil and add the polenta in a steady stream, whisking constantly. Whisk for about 5 minutes until the polenta starts to thicken. Reduce the heat to low and cover the pot. Simmer for 30 minutes, whisking every few minutes to break up any clumps.

                    2.When the polenta starts to pull away from the sides of the pot when whisking, vigorously whisk in the cold butter and parmesan and continue whisking until the butter and cheese are melted. Whisk in the herbs and season with salt and pepper to taste. Serve with the stuffed mushrooms.`
            },
            {
                _id: 4,
                image: w4,
                title: 'VEAL SHANKS',
                desc: "Lamb shanks work equally well in this recipe. Add creamy potatoes or wet polenta for the perfect winter dinner.",
                ingredients: `Plain flour, for dusting

                    8 veal shanks
                    
                    1/4 cup olive oil
                    
                    1 medium brown onion, peeled, roughly chopped
                    
                    3 carrots, peeled, roughly chopped
                    
                    4 celery stalks, roughly chopped
                    
                    sea salt and freshly ground black pepper
                    
                    2/3 cup cabernet merlot
                    
                    8 cups veal stock
                    
                    6 cloves garlic, peeled
                    
                    4 bay leaves
                    
                    4 sprigs fresh thyme`,
                method: `Preheat oven to 200°C. Lightly flour shanks then, in a heavy-based pan over high heat, seal shanks in olive oil.

                        Remove shanks once golden and set aside. In the same pan, sauté onion, carrots and celery with a pinch of salt for a few minutes or until browned. Deglaze pan with wine, and simmer for 1 minute. Add stock, garlic, herbs and shanks to pan and bring to a simmer.

                        Cover the pan and place in oven for about 2 hours, turning halfway through until meat is beginning to fall off the bone.

                        Remove from oven. Check seasoning, and serve with fresh green vegetables - peas, beans, broccolini or zucchini - blanched and finished with extra virgin oil, lemon and salt.`
            }
        ]
    },
    {
        _id: 2,
        title : 'Summer',
        fire: 'Cool',
        desc : 'The sun is here to stay, and one thing we all need right now is summer food. We all know this feeling of not wanting to get anywhere near a warm meal. During the warmer months, it is the cold dishes we all desire, here are some of them.',
        foods: [
            {
                _id: 1,
                image: s1,
                title: 'summer fruit salad',
                desc: "The key to a striking fruit salad is more in what you leave out than what you put in. Keep your colour palette simple and it will look elegant and refined. This refreshing salad is all about yellow, orange and red fruits.",
                ingredients: `900g vanilla coconut yoghurt

                ¼ tsp ground cardamom
                
                2 passionfruit, pulp only
                
                1 mango, sliced
                
                2 peaches or nectarines, sliced 
                
                2 plums, sliced
                
                1 apricot, quartered
                
                ½ cup cherries
                
                ¼ pineapple, peeled and sliced`,
                method: `1. Combine the passionfruit pulp with any slices from the other fruits that don't make for attractive slices (such as trimmings from around the seed of the mango and offcuts from the stone fruit). Add the cardamom and mash together with a fork into a rough purée, then swirl through the coconut yoghurt. Dollop the yoghurt into the base of an attractive serving dish and arrange the fruit on top. `
            },
            {
                _id: 2,
                image: s2,
                title: 'Roasted porterhouse',
                desc: "This is my take on roast beef, served with braised rainbow chard scented with cinnamon, and a non-traditional rendition of an old-school sauce.",
                ingredients: `1.5kg porterhouse, in one piece

                Salt flakes
                
                Freshly ground pepper
                
                Bread sauce
                
                300g creme fraiche
                
                375ml milk
                
                1 large clove garlic, finely sliced
                
                1 fresh bay leaf
                
                1 eschalot (golden shallot), sliced
                
                250g white sourdough bread,
                
                no crusts, diced
                
                60g fresh horseradish, grated (or quality preserved horseradish)
                
                ½⁄ tsp English mustard
                
                3 tsp Dijon mustard
                
                1 lemon
                
                Braised chard
                
                1½⁄ bunches rainbow chard
                
                (or silverbeet)
                
                100ml extra-virgin olive oil
                
                1 brown onion, finely diced
                
                4 cloves garlic, chopped
                
                1 cinnamon stick`,
                method: `1. Preheat the oven to 200C. Place a heavy frying pan over high heat for three minutes.

                2. While the pan heats up, score the fat on top of the porterhouse and rub the whole piece of meat with salt and pepper. Cook the meat, fat side down, for five minutes (you won't need oil as the fat will render down). Flip and cook the other side for five minutes.
                
                3. Place the porterhouse on a rack in a baking tray, fat side up. Roast for about 35-45 minutes (depending on your oven) for medium rare, or until a probe thermometer registers an internal temperature of 60C. Remove from the oven and rest the meat for 15 minutes before slicing.
                
                4. To make the bread sauce, take the creme fraiche from the fridge to take the chill off it. In a small saucepan, add the milk, garlic, bay leaf and eschalot and bring to a simmer.
                
                5. Tip in the bread and remove from the heat. Allow to soften for 10 minutes or so, then puree, adding a little milk if it's too thick for the stick blender (bear in mind the creme fraiche will loosen the sauce).
                
                6. Tip into a bowl and mix through the creme fraiche, horseradish and mustards. Season with salt and pepper and squeeze in lemon juice to taste. Serve immediately.
                
                7. For the chard, wash and trim it, leaving the stalks on, and cut into thick slices on the diagonal. Leave in a colander to drain.
                
                8. In a large pot, add the olive oil and cook the onion and garlic for three minutes. Add the well-drained chard (a bit of water sticking to the leaves will help it steam) and the cinnamon, cover the pot and cook over high heat for two minutes. Stir, replace the lid and cook for another three minutes. Stir again, cover and lower the heat to medium and cook for a further 15 minutes or until tender. Season.
                
                9. To serve, place the chard on a platter, slice the beef and place it over the hot chard. Serve the bread sauce on the side.`
            },
            {
                _id: 3,
                image: s3,
                title: 'Spicy Spatchcock',
                desc: "Escabeche is a classic Mediterranean marinade used to lightly pickle meat or fish while infusing it with spice.",
                ingredients: `12 eschalots (golden shallots), unpeeled

                2 bulbs garlic
                
                100ml extra-virgin olive oil, plus a little extra
                
                2 large tomatoes, very ripe
                
                2 punnets cherry tomatoes
                
                2 pinches saffron threads
                
                2 tbsp yellow mustard seeds
                
                1 tsp sweet smoky paprika
                
                2 tsp ground cumin
                
                2 fresh bay leaves
                
                Salt flakes
                
                120ml sherry vinegar
                
                2½ tbsp brown sugar
                
                4 poussin, size five - ask your supplier to spatchcock the birds (removing the backbone)
                
                Freshly ground pepper
                
                ½ bunch tarragon`,
                method: `1. Preheat the oven to 180 degrees.

                2. Cut the unpeeled eschalots lengthways and toss into a roasting pan with the whole garlic bulbs. Drizzle with the extra oil and roast for 30 minutes.
                
                3. Once cooked, remove from the oven and allow to cool. Squeeze out the garlic pulp and peel the skins off the eschalots. Increase the oven temperature to 200 degrees.
                
                4. To skin the tomatoes, bring a pot of water to the boil. Score a cross in the base of the large tomatoes and in half of the cherry tomatoes (use the others unpeeled) and drop them into the boiling water for 30 seconds. Remove and refresh in cold water. The skins should slip off easily. Chop the large tomatoes, leaving the cherry tomatoes whole.
                
                5. To make the sauce, in a large, wide-based saucepan over medium heat, add the 100ml of oil, chopped tomatoes, peeled and unpeeled cherry tomatoes, eschalots and garlic paste and cook, stirring, for a couple of minutes.
                
                6. Add the saffron, spices and bay leaves, season with a little salt and stir for another minute.
                
                7. Add the sherry vinegar and brown sugar and cook for another five minutes. Don't overreduce; the sauce should be loose and the cherry tomatoes should hold their shape. Take off the heat but keep warm.
                
                8. Place a large frying pan over high heat. Season the birds with salt and pepper and lightly oil. Sear the flattened poussin for three minutes on each side. Transfer to a roasting tray and roast in the oven for 10-15 minutes.
                
                9. When the birds are nearly cooked, gently warm the sauce, add the picked tarragon and check the seasoning.
                
                10. Remove the birds from the oven and lay on a serving platter with any roasting juices. Immediately pour over the warm dressing and rest for five to 10 minutes before serving.`
            },
            {
                _id: 4,
                image: s4,
                title: 'Summer skewered fish',
                desc: "A barbecue at a great beach site held under shady trees in case of blazing sun. A little preparation is called upon, either the night before or early morning.",
                ingredients: `15 green prawns, shells removed

                1kg fish fillets (select a variety - salmon, snapper, butterfish and blue eye). Cut into 3cm cubes
                
                5 long wooden skewers, soaked in water for 30 minutes
                
                Title:
                
                4 tbsp extra virgin olive oil
                
                1 cup dry white wine
                
                2 tbsp white wine vinegar
                
                juice of one lemon
                
                1 clove garlic, finely minced
                
                1 tbsp capers, finely chopped
                
                1 tbsp parsley, finely chopped
                
                1 tbsp fresh mint, finely chopped
                
                1 tbsp fresh dill, finely chopped
                
                salt and pepper`,
                method: `Make the marinade by whisking together the oil, wine, vinegar and lemon juice together with the herbs

                and capers. Pour over the fish pieces and marinate for at least two hours.
                
                Thread the fish pieces on to the skewers, alternating the different varieties of fish.
                
                Make sure your barbecue is on high. Season the fish with salt and pepper then grill for about 3 to 4 minutes per side, basting with the marinade.
                
                To serve
                
                Serve with a spoonful of marinade on a rectangle of crusty grilled polenta and a wild rocket salad.`
            }
        ]
    },
    {
        _id: 3,
        title : 'South Asian',
        fire: 'Flare',
        desc : 'Foods in this area of the world are flavoured with various types of chili, black pepper, cloves, and other strong herbs and spices and often with flavoured butter and ghee. Turmeric and cumin are often used to make curries.',
        foods: [
            {
                _id: 1,
                image: a1,
                title: 'Chicken biryani',
                desc: "Biryani is a classic rice dish cooked across India. Various proteins are used, including mutton, goat, fish, egg and lentils, although chicken is probably the most common – at least outside India",
                ingredients: `700g chicken thigh fillets, cut in half

                160ml milk
                
                1 tbsp rosewater
                
                1 pinch saffron threads
                
                10 cloves
                
                1 cinnamon stick
                
                5 green cardamom pods
                
                2 tsp cumin seeds
                
                2 fresh bay leaves
                
                200ml vegetable oil
                
                3 red onions, finely sliced in rings
                
                3 tomatoes, diced
                
                500g basmati rice, soaked in cold water for 30 minutes and drained
                
                30g butter, melted
                
                ⅓ cup blanched almonds, toasted
                
                Marinade
                
                300g natural yoghurt
                
                6 garlic cloves, finely grated
                
                10cm ginger, peeled and finely grated
                
                8cm fresh turmeric, peeled and finely grated (or 2 tsp ground turmeric)
                
                2 long green chillies, finely chopped
                
                2 tsp salt flakes
                
                1 tsp curry powder
                
                1 tbsp ground coriander seeds
                
                Raita
                
                350g natural yoghurt
                
                3 handfuls mint leaves, finely chopped
                
                2 handfuls coriander leaves, finely chopped
                
                1 tsp castor sugar
                
                ½ tsp salt flakes
                
                juice of ½ lime`,
                method: `1. Preheat the oven to 180C fan-forced or 200C conventional.

                2. Combine the marinade ingredients in a large bowl. Add the chicken and toss to thoroughly coat. Set aside at room temperature for one hour, or refrigerate for longer.
                
                3. Gently warm the milk, rosewater and saffron in a small saucepan and set aside.
                
                4. Add the cloves, cinnamon, cardamom, cumin and bay leaves to a small bowl – this is to ensure that you add the spices to the hot pan all at once, minimising the chance of burning them.
                
                5. Heat the oil in a large frying pan over medium heat and fry the onions until golden, about 10 minutes. Lift the onions out of the oil and set aside.
                
                6. Tip most of the oil out of the pan, leaving about three tablespoons behind. Add the spices and fry for one minute. Add the chicken with the residual marinade and cook for five minutes, stirring frequently. Add the tomato and cook for about 20 minutes until the sauce is clinging to the chicken with a little extra still in the pan. Set aside and keep warm.
                
                7. Boil the rice in salted water for five minutes – it should be a little bit soft but still quite firm. Drain, stir with a fork to separate the grains but don't rinse or refresh.
                
                8. Line the base of a large saucepan (one that will present well on the dining table) with a third of the rice and a splash of melted butter. Top with half the chicken and sauce. Layer on another third of the rice, half the onions and half the saffron milk. Finish with the remaining chicken, followed by the remaining rice, butter, saffron milk and two tablespoons of boiling water, reserving the remaining onions to finish the biryani.
                
                9. Place the pan over high heat and, watching very carefully. Once you see the first puff of steam move the pan to a small gas jet on low heat. Cover tightly and cook for 30 minutes.
                
                10. While the biryani cooks, make the raita by combining all the ingredients in a bowl.
                
                11. After 30 minutes, remove the lid from the pan and cook for 10 more minutes.
                
                12. Scatter the almonds and remaining onions over the cooked biryani and serve with the raita on the side.`
            },
            {
                _id: 2,
                image: a2,
                title: 'Mutton Nihari',
                desc: "Nihari is a deliciously smooth flour based mutton stew of slow cooked in a myriad of spices. Reserved for royal kitchens in the past, nihari masala is a delicacy.",
                ingredients: `1 kg  mutton , preferably shank portion (cut into 8-10 pieces)

                4 tbsp  Ghee/ Clarified butter

                2 medium onions , finely sliced

                1 tsp  ginger paste

                1 tsp  garlic paste

                Salt  to taste

                2 tsp  coriander powder

                1/2 tsp  turmeric powder

                3 tbsp  wheat flour

                3 tbsp  nihari masala`,
                method: `Heat Ghee (you can use oil as well but ghee makes it tastier) in a deep bottom stock pot. Once the ghee is hot, add the sliced onions and fry till they start to turn brown.

                Add mutton pieces, ginger paste, garlic paste, coriander powder, turmeric powder and salt. Mix well to coat the mutton in ghee and spices. Sauté for 5 mins.

                Add the nihari masala and 8 cups of water. Mix well, cover and cook on very low heat for about 4 hours until the meat is tender. Keep checking in between. The way to know that the meat is cooked is when it breaks easily with a wooden spoon.

                Dissolve wheat flour in half cup of water such that there are no lumps. Slowly add it to the gravy. Stir to mix it well in the gravy and let it simmer for another 10-15 mins till the gravy thickens.

                Sprinkle some lime juice and garnish with ginger strips and fresh coriander leaves. Serve hot.`
            },
            {
                _id: 3,
                image: a3,
                title: 'Fry Daal',
                desc: "Dal fry is a delicious lentil recipe popular in India that is made with tur dal (pigeon pea lentils), onions, tomatoes and spices.",
                ingredients: `½ cup tuvar dal (tur dal, arhar dal, pigeon pea lentils) or ¼ cup each of tuvar dal and masoor dal

                1.5 cups water for stove-top pressure cooking

                1 pinch turmeric powder (ground turmeric)
                
                1 to 2 pinches asafoetida powder (hing) – for a strong asafoetida, just one pinch is enough

                ½ teaspoon turmeric powder (ground turmeric)

                ½ teaspoon red chili powder or cayenne pepper or smoked paprika

                ⅓ to ½ cup finely chopped tomatoes or 1 medium-sized

                1 to 1.5 cups water or add as required

                salt as required

                1 teaspoon kasuri methi (dry fenugreek leaves)

                ¼ to ½ teaspoon Garam Masala Powder

                ½ to 1 teaspoon lemon juice – optional

                2 to 3 tablespoon chopped coriander leaves (cilantro leaves) for garnish`,
                method: `Cooking Lentils

                Take tuvar dal (arhar dal or pigeon pea lentils) or half-half of tuvar dal and masoor dal (pink or orange lentils) in a colander or sieve.
                Rinse the lentils in water three to four times. Drain all the water.
                Then add the lentils in a 2- litre pressure cooker. Add a pinch of turmeric powder (haldi) and 1.5 cups water.
                Pressure cook the lentils for 9 to 10 minutes on a medium heat until they are softened thoroughly.
                Once the lentils are cooked, then mash them lightly with a wired whisk or with a spoon and set aside.

                Sautéing Onions, Tomatoes, Spices

                In another pan heat oil or ghee or unsalted butter. Add the mustard seeds and let them splutter.
                When you hear the spluttering sound of the mustard seeds, add the cumin and fry them.
                Add the onions and sauté stirring often until they become translucent or light brown.
                Now add the ginger-garlic paste and sauté for some seconds or until their raw aroma disappears.

                Add the green chilies, red chilies, curry leaves and mix well.
                Add all the spice powders – turmeric powder, red chili powder, asafoetida powder. Stir and mix again.
                Add the tomatoes and cook until they soften and you see oil releasing from the sides of the masala.

                Making Dal Fry (Stove-Top)

                Now add the cooked and mashed lentils. Mix thoroughly. Add water, salt and mix again.
                Simmer for 4 to 5 minutes more or till you get a smooth and slightly thick consistency, stirring at intervals.
                Dal fry is not thin and is usually has a medium to thick consistency. So you can adjust the amount of water you want.
                Keep the dal to a medium consistency if you prefer. Making it very thin will dilute the flavors.
                Lastly crush the kasuri methi in the palms of your hands and add. Then add garam masala powder. Simmer for a minute. Switch off the heat and add chopped coriander leaves. Add lemon juice if you want, at this stage and stir well.
                You can garnish dal fry with some more coriander leaves while serving.
                While serving top it with some ghee or butter if required.
                Serve dal fry hot with steamed basmati rice, biryani rice, jeera rice or saffron pulao. It also goes well with roti or naan.`
            },
            {
                _id: 4,
                image: a4,
                title: 'Masala Dosa',
                desc: "Masala dosa is a popular South Indian breakfast where a crispy crepe made of fermented rice and lentil batteris served with flavorful spiced potato curry.",
                ingredients: `for batter:

                3 cup sona masuri rice
                ½ tsp methi / fenugreek seeds
                water (for soaking)
                1 cup urad dal
                2 tbsp toor dal
                2 tbsp chana dal
                1 cup poha / avalakki (rinsed)

                for aloo bhaji:

                2 tbsp oil
                1 tsp mustard
                1 tsp urad dal
                1 tsp chana dal
                1 dried red chilli
                few curry leaves
                pinch hing / asafoetida
                2 chilli (finely chopped)
                1 inch ginger (finely chopped)
                1 onion (sliced)
                ¼ tsp turmeric
                1 tsp salt
                3 potato (boiled & mashed)
                2 tbsp coriander (finely chopped)
                2 tbsp lemon juice`,
                method: `masala dosa batter preparation:
                
                        firstly, in a large bowl take 3 cup sona masuri rice and ½ tsp methi.
                        rinse well and soak in enough water for 4 hours.
                        in another bowl take 1 cup urad dal, 2 tbsp toor dal and 2 tbsp chana dal.
                        rinse well and soak in enough water for 2 hours.
                        after soaking dal for 2 hours, drain off the water and transfer to the grinder. you can also grind in mixi if you do not have access to a grinder.
                        add water as required and blend to smooth paste.
                        scrape sides. the smooth and fluffy batter will be ready after 40 minutes.
                        transfer the batter to a large vessel and keep aside.
                        in the same grinder add soaked rice and 1 cup rinsed poha.
                        add water slowly and scrape the sides. blend to a coarse paste.
                        transfer the rice batter to the same urad dal batter.
                        mix well making sure everything is well combined.
                        ferment in a warm place for at least 8 hours or until the batter doubles in volume. if you are living in a cold climate, then you can place the batter in the warm oven (just heat the oven until it turns slightly warm and then turn off) to ferment.
                        once the batter is well fermented, mix gently, without disturbing the air pockets.
                        transfer 4 cups of fermented batter to a small bowl and add 1 tsp salt.
                        mix well until the salt is well combined. masala dosa batter is ready. keep aside.

                        aloo bhaji preparation:

                        firstly, in a large kadai heat 2 tbsp oil and splutter 1 tsp mustard, 1 tsp urad dal, 1 tsp chana dal, 1 dried red chilli, few curry leaves, pinch hing.
                        now add 2 chilli and 1 inch ginger. saute well.
                        also, add 1 onion and saute until onions shrink slightly.
                        further, add ¼ tsp turmeric and 1 tsp salt. saute well.
                        now add 3 potato and mix well, mash slightly making sure everything is well combined.
                        turn off the flame and add 2 tbsp coriander and 2 tbsp lemon juice.
                        mix well and aloo bhaji for masala dosa is ready. keep aside.

                        masala dosa preparation:

                        firstly, add a ladleful of batter on hot tawa.
                        spread as thin as possible making a crispy dosa.
                        take 1 tsp of butter and spread uniformly.
                        also, place 2 tbsp of prepared aloo masala in the centre.
                        roast until the dosa turns golden brown and crisp.
                        scrape the sides of dosa and roll the dosa.
                        finally, masala dosa recipe is ready to serve with coconut chutney and sambar.`
                }
        ]
    },
    {
        _id: 4,
        title : 'Italian',
        fire: 'Sauce',
        desc : 'Who doesnt like Pasta and Pizza duh',
        foods: [
            {
                _id: 1,
                image: i1,
                title: 'spaghetti carbonara',
                desc: "The secret of a great spaghetti carbonara is not the eggs, bacon or cheese – it's how and when it all comes together.",
                ingredients: `150g guanciale or streaky bacon, diced
                350g spaghettini or spaghetti
                2 whole large eggs and 1 extra egg yolk
                100g grated pecorino or parmesan
                sea salt
                1 tsp freshly cracked black peppercorns
                extra grated cheese and black pepper for serving`,
                method: `Fry the guanciale or bacon over low heat in a dry frypan until crisped at the edges.

                Cook the pasta in a big pot of boiling, heavily salted water until al dente.

                While the pasta is cooking, whisk the whole eggs and egg yolk in a large bowl. Whisk in the cheese, sea salt and black pepper and set aside.

                As soon as the spaghetti is cooked, drain (reserving half a cup of the cooking water) and add pasta, dripping wet, to the pan of guanciale or bacon. Toss until well-coated, then remove the pan from the heat.

                Add the egg mixture and a good dash of the pasta water to the pan, tossing quickly to allow the heat of the spaghetti to cook the egg into a creamy, cheesy sauce.

                Serve immediately on warm plates with extra cheese and black pepper.`
            },
            {
                _id: 2,
                image: i2,
                title: 'Peperoni Pizza',
                desc: "These dough and tomato sauce recipes come from a friend of ours who has a guesthouse in Margaret River with her Italian husband they're his recipes.",
                ingredients: `1 tbsp or 1 packet dried yeast

                1 tsp caster sugar
                
                500g bakers or strong flour plus some extra
                
                2 tbsp extra virgin olive oil
                
                sea salt
                
                400g tinned tomatoes
                
                1 tbsp dried oregano
                
                2 tbsp chopped fresh basil leaves
                
                freshly ground white pepper
                
                400g salami or peperoni, thinly sliced
                
                1 small red onion, thinly sliced
                
                500g mozzarella, sliced
                
                extra basil leaves`,
                method: `Place yeast and sugar in a small bowl with 60ml lukewarm water. Stir and leave for 10 minutes in a warm place to activate. Place flour, 1 tbsp olive oil and a large pinch of salt in a large bowl. Once the yeast mix is ready, add the flour and 250ml of water. Mix to combine into a large ball and knead for 10 minutes. Put back in bowl, cover with tea towel and allow to prove until it has doubled in size. Heat oven to 220C. Puree tomatoes, oregano, chopped basil, sea salt, and pepper with the rest of the olive oil.

                Divide dough into four balls and prove for a further 10 minutes. Roll dough to a thin round base and cover with a couple of spoonfuls of tomato sauce. Top with salami, onion and mozzarella. Bake for about 10 minutes. Top with basil before serving.`
            },
            {
                _id: 3,
                image: i3,
                title: 'Blistered zucchini pasta',
                desc: "Getting the texture of polenta right is not as hard as it might seem. It should be somewhere between soft mashed potato and thick custard, so that it spreads ever so gently.",
                ingredients: `12 zucchini flowers, stems attached, halved lengthways

                ¼ cup extra virgin olive oil
                
                400g pappardelle
                
                2 garlic cloves, thinly sliced
                
                1 long red chilli, seeds removed and finely chopped
                
                ¼ cup lemon juice
                
                1 tsp finely grated lemon zest
                
                250g burrata, torn`,
                method: `1. Heat a large non-stick frying pan over high heat. Toss the zucchini in half the oil. In 2 batches, cook the zucchini for 1-2 minutes or until just coloured. Set aside.

                2. Meanwhile, cook the pasta in salted boiling water for 6-8 minutes, or until al dente.
                
                3. Heat remaining oil in the frying pan over high heat. Add the garlic and chilli and cook for 30 seconds or until just fragrant.
                
                4. While hot, place the pasta in a large bowl, add the garlic, chilli, oil, lemon juice and zest and toss to combine. Add zucchini and gently toss. Divide between bowls and top with torn burrata. Season with pepper and serve`
            },
            {
                _id: 4,
                image: i4,
                title: 'Pizza spinaci',
                desc: "Spinich pizza might not sound good but it tastes absolutely immaculate",
                ingredients: `1 tablespoon caster (superfine) sugar

                2 teaspoons dried yeast or 15 g (½ oz) fresh yeast
                
                215 ml (7½ fl oz) lukewarm water
                
                450 g (1 lb/3⅔ cups) plain (all-purpose) flour
                
                3 tablespoons olive oil
                
                Atopping
                4 tablespoons olive oil
                
                4 garlic cloves, crushed
                
                4 tablespoons pine nuts
                
                2 kg (4 lb 8 oz) English spinach, trimmed and roughly chopped
                
                cornflour (cornstarch), to dust
                
                2 quantities tomato sauce
                
                440 g (15½ oz/3 cups) grated mozzarella cheese
                
                30 very small black olives
                
                6 tablespoons grated parmesan cheese`,
                method: `1. To make the pizza dough, put the sugar and yeast in a bowl and stir in 90 ml (3 fl oz) water. Leave in a draught-free spot to activate. If the yeast does not bubble and foam in 5 minutes, throw it away and start again.

                2. Mix the flour and ¼ teaspoon salt in a bowl or food processor fitted with a plastic blade. Add the olive oil, remaining water and the yeast mixture. Mix until the dough loosely clumps together. Transfer to a lightly floured surface and knead for 8 minutes, adding a little flour or warm water if necessary, until you have a soft dough that is not sticky but is dry to the touch.
                
                3. Rub the inside of a large bowl with olive oil. Roll the ball of dough around in the bowl to coat it with oil, then cut a shallow cross on the top with a sharp knife. Cover with a tea towel or put in a plastic bag and leave in a draught-free spot for 1–1½ hours, or until doubled in size.
                
                4. Punch down the dough to its original size, then divide into two portions. Working with one portion at a time, push the dough out to fit a 30 cm (12 inch) lightly oiled circular tray. Preheat the oven to 240°C (475°F/Gas 9).
                
                5. To make the topping, heat the oil in a frying pan and fry the garlic and pine nuts, stirring often, over low heat for 5–6 minutes, or until golden. Add the spinach, increase the heat and stir until wilted. Season with sea salt and freshly ground black pepper.
                
                6. Dust each pizza base with cornflour and spoon over half the tomato sauce on each base, spreading to cover. Sprinkle with half the mozzarella cheese. Spread the spinach and olives over the top, followed by the rest of the mozzarella and the parmesan cheese. Bake for 12–15 minutes, or until golden and puffed. Brush the rim with a little extra olive oil before serving.`
            }
        ]
    },
    {
        _id: 5,
        title : 'Burgers',
        fire: 'LOL',
        desc : "I didnt know what to type lol so here's my friend Google - A hamburger (or burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. ... A hamburger topped with cheese is called a cheeseburger.",
        foods: [
            {
                _id: 1,
                image: b1,
                title: 'Auntys burger',
                desc: "Burgers can be healthy, use a lean beef patty with vegetables, such as carrot, onion and spinach, and stuff the lot into a wholegrain roll with salad.",
                ingredients: `500g grass-fed beef mince

                6 spring onions, sliced
                
                1 carrot, grated
                
                250g chopped, blanched spinach
                
                bunch parsley, chopped
                
                pepper
                
                6 wholegrain rolls
                
                plenty of salad
                
                tomato relish`,
                method: `Combine mince, spring onion, carrot, spinach, parsley and pepper. Shape into six burgers.

                Cook with a little olive oil for three to four minutes a side.
                
                Serve in wholegrain rolls with salad and tomato relish.`
            },
            {
                _id: 2,
                image: b2,
                title: 'Lamb Burger',
                desc: "Never had lamb burger lol but would love to",
                ingredients: `1 tablespoon ground cumin

                250 g (1 cup) plain Greek-style yoghurt
                
                ½ Lebanese (short) cucumber, grated
                
                1 tablespoon finely chopped mint leaves
                
                1 tablespoon olive oil
                
                1 onion, finely chopped
                
                2 garlic cloves, crushed
                
                800 g (1 lb 12 oz) minced (ground) lamb
                
                2 tablespoons finely chopped flat-leaf (Italian) parsley
                
                2 tablespoons finely chopped coriander (cilantro) leaves
                
                2 red capsicums (peppers), quartered and seeded
                
                1 tablespoon olive oil, extra
                
                2 red onions, thinly sliced olive oil spray
                
                1 loaf Turkish bread, cut into 4 pieces and split horizontally
                
                100 g (3½ oz) baby rocket (arugula) leaves`,
                method: `1. Dry-fry 1 teaspoon ground cumin over medium heat for 30 seconds, or until it is fragrant. Put the yoghurt, cucumber, mint and dry-fried cumin in a small bowl and mix it all together. Cover the bowl and refrigerate it until needed.

                2. Heat the oil in a frying pan and cook the onion over medium heat for 2-3 minutes or until softened. Add the garlic and remaining cumin, cook it for another minute, then allow the mixture to cool. Put the onion mixture in a large bowl with the lamb, parsley and coriander, season with salt and pepper and mix it together with your hands. Divide the mixture into four portions, and shape each portion into a 2 cm (¾ inch) thick patty.
                
                3. Heat the barbecue to medium-high direct heat. Toss the capsicum with the extra oil and cook it on the flat plate for 6 minutes on each side or until it is softened and lightly charred. Grill the patties on the flat plate for 5-6 minutes each side or until they are done.
                
                4. Spray the red onion with the olive oil spray and cook it on the flat plate for 2-3 minutes or until soft and golden. Toast the bread, cut-side down, on the chargrill plate for 1-2 minutes or until it is marked and golden. To assemble the burgers, put some rocket on four of the bread slices. Put a patty on top, then the capsicum and onion. Dollop 2-3 tablespoons of the yoghurt mixture on each and season with salt and freshly ground black pepper. Top with the remaining bread slices and serve them straight away.`
            },
            {
                _id: 3,
                image: b3,
                title: 'Vegetarian burger',
                desc: "No meat but taste like meat? Ayooo what",
                ingredients: `400 g silken tofu, drained

                1 medium carrot, peeled
                
                1 punnet fresh baby corn
                
                ¼ cup peanut oil
                
                1 medium onion, thinly sliced
                
                1 clove garlic, crushed
                
                1 stalk celery, finely sliced
                
                1 red capsicum, cut in thin strips
                
                ¼ cup water
                
                2 teaspoons cornflour
                
                1 tablespoon sweet chilli sauce
                
                2 teaspoons soy sauce
                
                2 tablespoons cornflour, extra
                
                1 teaspoon ground paprika
                
                1 teaspoon ground turmeric
                
                1 teaspoon ground coriander
                
                1 loaf of rye bread, sliced and toasted
                
                alfalfa sprouts`,
                method: `1. Cut tofu into eight slices; drain on paper towels. Using a vegetable peeler, peel the carrot into long ribbons. Cut corn in half lengthways.

                2. Heat half the oil in a large frying pan or wok. Add onion and garlic, cook over medium heat 1 minute. Stir in carrot, celery, capsicum and corn. Stir-fry over medium-high heat 2–3 minutes. Add blended water, cornflour, chilli sauce and soy sauce. Cook 1–2 more minutes or until mixture boils and thickens and vegetables are just tender. Remove from heat, keep warm.
                
                3. Combine extra cornflour, paprika, turmeric and coriander on sheet of greaseproof paper. Carefully coat drained tofu slices with mixture. Heat remaining oil in medium frying pan. Add tofu slices and cook over medium heat 1–2 minutes each side or until golden. Drain on paper towels.
                
                4. Place 4 slices of toasted rye bread onto individual serving plates. On each slice of bread, place alfalfa sprouts (or a lettuce leaf, if preferred), some of the vegetable mixture, and 2 slices of fried tofu. Finish with another slice of toasted rye bread.`
            },
            {
                _id: 4,
                image: b4,
                title: 'Aussie burger',
                desc: "Classic Austrailian lol",
                ingredients: `500 g lean beef mince

                1 onion, finely chopped
                
                1 egg
                
                ⅓ cup breadcrumbs
                
                2 tablespoons tomato sauce
                
                1 teaspoon steak seasoning
                
                salt and pepper to taste
                
                40 g butter
                
                2 large onions, extra, cut in thin rings
                
                4 slices cheddar cheese
                
                4 eggs, extra
                
                4 rashers bacon, rind removed
                
                4 large hamburger buns, halved
                
                shredded lettuce
                
                1 large tomato, sliced
                
                4 large beetroot slices, drained
                
                4 pineapple rings, drained
                
                tomato sauce, for serving`,
                method: `1. Combine mince, chopped onion, egg, breadcrumbs, sauce, seasoning, salt and pepper in bowl. Mix with hands to combine. Divide mixture into 4 and shape into round patties. Heat 30 g butter in pan, add onion rings. Cook over medium heat until browned. Keep warm.

                2. Heat a frying pan or grill plate, brush with oil. Cook patties 3–4 minutes each side or until cooked through. Place a cheese slice on each patty.
                
                3. While patties are cooking, heat remaining butter in a frying pan. Fry eggs and bacon until eggs are cooked through and bacon is crisp.
                
                4. Toast buns and place bases on serving plates. On each base, place lettuce, tomato, beetroot, pineapple, then a meat patty. Follow these with onion, bacon, egg and finally a bun top.`
            }
        ]
    }
    
  ]

  export default data