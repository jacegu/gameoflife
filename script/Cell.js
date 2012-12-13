var Cell = {
  alive: function(){
    return { alive: true };
  },
  dead: function(){
    return { alive: false };
  },
  isAlive: function(cell){
    return cell.alive;
  }
}
