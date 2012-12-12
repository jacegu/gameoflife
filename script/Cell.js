function cell(){
  return { alive: true };
}

function deadCell(){
  return { alive: false };
}

function isAlive(cell){
  return cell.alive;
}
