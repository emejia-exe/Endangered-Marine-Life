function selectOcean() {
    // Selection Variables
    let selectOcean = document.getElementById("ocean");
    let ocean = selectOcean.options[selectOcean.selectedIndex].value;

    let selectAnimal = document.getElementById("animals");
    let animal =selectAnimal.options[selectAnimal.selectedIndex].value;

    //Get information
    let fish = document.getElementById("fish");
    let info = document.getElementById("info");
    let img = document.getElementById("animalPicture");
    let helpD = document.getElementById("helpDesc");
    let helpT = document.getElementById("helpTitle");
    let static_text = document.getElementById("static_text");
    

    //Animal Choice Output
    let index = 0;
    let oceanType = 0;

    if (animal=="reptile"){
        index = 1;
    }   else if (animal=="bird"){
        index = 2;
    }   else if (animal=="fish"){
        index = 3;
    }
    if (ocean=="pacific"){
        index += 4;
        oceanType = 1;
    }   else if (ocean=="atlantic"){
        index += 8;
        oceanType = 2;
    }   else if (ocean=="arctic"){
        index += 12;
        oceanType = 3;
    }


    let names = ["Humpback Whale", "Loggerhead Sea Turtle", "Pink Pigeon", "Chevron Butterfly Fish",
    "Sea Otter", "Ridley Sea Turtle", "Cook's Petrel", "Bluefin Tuna",
    "Orca", "Green Sea Turtle", "Atlantic Puffin", "Atlantic Halibut", 
    "Polar Bear", "No Endangered Species", "Steller's Eider", "Pacific Salmon"]

    let descriptions = ["The humpback whale population took a sharp decline after the 19th to 20th century after they became victims of commercial whaling.",
    "Trash that litters the beaches and oceans loggerhead sea turtles live in poses a huge threat to their safety. As they ingest things they are not supposed to, their numbers have been greatly affected.",
    "The pink pigeon's habitat is slowly being taken away because of deforestation. This allows lurking predators to threaten their already decreasing population.",
    "Global warming and pollution threatens the coral that the chevron butterflyfish feed off of. With sewage discharge and rising sea temperatures, their main food source becomes unavailable.",
    "Sea otters became a popular target of commercial hunting because of their fur. In 1977, they were listed under the Endangered Species Act (ESA).",
    "Future generations of olive ridley sea turtles are being threatened by the loss of their habitats and the many dangers their eggs face. By either predators or lights misguiding them, the young turtles don't have the chance to make it to the ocean.",
    "The introduction of different predators in their environment has drastically affected the population of the cook's petrel. More specifically in their breeding and nesting grounds.",
    "The Bluefin Tuna is finding itself more endangered every day as there is an influx in its desirability by Human predators . This has caused the Bluefin tuna to decline drastically in its population size . Being an Apex Predator, Bluefin tuna are essential to the balance of the Marine Ecosystem.",
    "Although they are known as killers, there is no killing to be done when overfishing has stolen their food source. With limited prey, orca populations have started to decrease.",
    "Development along the coasts and getting entangled in fishing gear are among many of the reasons why green sea turtles are endangered. As their environment becomes more dangerous, so do their decreasing numbers.",
    "As the climate grows, so does the temperature of the sea. This poses a big threat to the Atlantic puffin's food source as the fish they hunt start to leave for cooler areas, effectively leaving them to starve.",
    "Due to overfishing, Atlantic Halibut are currently classified as endangered by the IUCN as they are a slow developing and maturing species. This makes them susceptible to overfishing which is seen clearly in the crash of the population in the 20th century .",
    "Global warming has taken the homes of many polar bears in the arctic. As the ice melts away, so do their numbers.",
    "Lucky for us, we could not find an endangered reptile in the Arctic Ocean.",
    "Oil spills have negatively affected marine life - the Steller's eider is no exception. With oil contaminating their habitats, their numbers have started to decline.",
    "As the temperature of the oceans rises, the pacific salmon experiences some difficulty.The pacific salmon are unable to keep up with said change, effectively reducing their population due to their lack of adaptability."]

    fish.innerHTML = names[index]
    info.innerHTML = descriptions[index]
    img.src = `./Assets/animals/${names[index]}.png`

    let helptitle = ["Habitat Destruction", "Pollution", "Oil Drilling", "Global Warming"]
    let helpdesc = ["Human intervention in natural ecosystems brings immense danger to the population of said ecosystems. This can be indirectly, through introduction of invasive alien species, or directly, through deforestation. You can help by donating to local communities in the Indian Ocean area.",
"Waste is constantly dumped into the Pacific Ocean, varying between plastic, sewage sludge, or even toxins and pesticides. If the Great Pacific Garbage Patch was a country, it would be larger than the United States. Many birds and fish are vulnerable to swallowing this plastic and endangering themselves. You can help by being mindful of the products you consume and choosing eco-friendly alternatives.",
"Toxic substances resulting from oil drilling, or major oil spills could wipe out endangered populations in the Atlantic. Many accidents have already occurred throughout the world, proving the vulnerability of these species if oil drilling becomes more prevalent. You can help by supporting actions against oil drilling in your country.",
"As the Earth gradually starts to get warmer and warmer, the posing threat to the arctic increases as ice begins to melt away rapidly. The melting has taken the homes of those who depend on the ice and the rising sea level may heavily affect the population of certain species. You can help by walking or biking to places that are closer to reduce greenhouse gas emissions."]

    helpT.innerHTML = helptitle[oceanType]
    helpD.innerHTML = helpdesc[oceanType]
    static_text.innerHTML = "Animals are often endangered in this ocean because of..."
    
}
