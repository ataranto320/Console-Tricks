const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("hello");

    // Interpolated
    console.log("Hello I am %s.", "Bob")
    // console.log(`Hello I am ${var}`)

    // Styled
    console.log("%c I am some great text", "font-size:25px; background: blue; text-shadow: 10px 10px 0 red")

    // warning!
    console.warn("OH NOOO, WANAYYY.");

    // Error :|
    console.error("Crap.");

    // Info
    console.info("My oreo cheesecake brownies are popular.");

    // Testing
    const p =document.querySelector("p");

    console.assert(p.classList.contains("ouch"), "That is wrong!");
    // console.assert( 1 === 2, "That is wrong!");

    // clearing
    // console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // console.clear();

    // Grouping together
    dogs.forEach(dog => {
        // console.group(`${dog.name}`);
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old.`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count("Boo");
    console.count("Blaa");
    console.count("Boo");
    console.count("Boo");
    console.count("Blaa");
    console.count("Blaa");
    console.count("Blaa");
    console.count("Boo");
    console.count("Boo");

    // timing
    console.time("fetching data");
    fetch("https://api.github.com/users/wesbos").then(data => data.json()).then(data => {
        console.timeEnd("fetching data");
        console.log(data);
    });

    //table 
    console.table(dogs);