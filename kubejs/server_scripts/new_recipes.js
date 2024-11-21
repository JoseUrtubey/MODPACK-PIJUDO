ServerEvents.recipes((event) => {
  //removing original recipes because it doesnt work(overlaped w/ other recipes)
  event.remove({ output: "paraglider:goddess_statue" });

  event.remove({ output: "paraglider:kakariko_goddess_statue" });

  event.remove({ output: "paraglider:goron_goddess_statue" });

  event.remove({ output: "paraglider:rito_goddess_statue" });
});

ServerEvents.recipes((event) => {
  //normal statue
  event.shaped(
    Item.of("paraglider:goddess_statue", 1), // arg 1: output
    [
      " A ",
      " A ", // arg 2: the shape (array of strings)
      " A ",
    ],
    {
      A: "minecraft:mossy_cobblestone",
    }
  );

  //kakariko statue

  event.shaped(
    Item.of("paraglider:kakariko_goddess_statue", 1), // arg 1: output
    [
      " J ",
      " K ", // arg 2: the shape (array of strings)
      " J ",
    ],
    {
      J: "minecraft:mossy_cobblestone",
      K: "minecraft:copper_ingot",
    }
  );

  // Goron statue
  event.shaped(
    Item.of("paraglider:goron_goddess_statue", 1), // arg 1: output
    [
      " S ",
      " R ", // arg 2: the shape (array of strings)
      " R ",
    ],
    {
      R: "minecraft:mossy_cobblestone",
      S: "minecraft:gold_ingot",
    }
  );

  // Rito statue
  event.shaped(
    Item.of("paraglider:rito_goddess_statue", 1), // arg 1: output
    [
      " C ", // arg 2: the shape (array of strings)
      " D ",
      " D ",
    ],
    {
      D: "minecraft:mossy_cobblestone",
      C: "#minecraft:flowers",
    }
  );
});
