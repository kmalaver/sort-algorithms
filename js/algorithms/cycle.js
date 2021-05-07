export const name = 'Cycle Sort';

async function cycle(list, nodes, control) {
  for (let cycleStart = 0; cycleStart < list.length - 1; cycleStart++) {
    let item = list[cycleStart];

    let pos = cycleStart;
    for (let i = cycleStart + 1; i < list.length; i++) {
      if (list[i] < item) pos += 1;
    }

    if (pos == cycleStart) continue;

    while (item == list[pos]) {
      pos++;
    }
    const swap = list[pos];
    list[pos] = item;
    item = swap;
    await draw(list, control.time);

    while (pos != cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < list.length; i++) {
        if (list[i] < item) pos += 1;
      }

      // put the item there or right after any duplicates
      while (item == list[pos]) {
        pos += 1;
      }
      const swap = list[pos];
      list[pos] = item;
      item = swap;

      await draw(list, control.time);
    }
  }

  return list;
}

export default cycle;
