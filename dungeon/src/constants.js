
const items = 
{
  "note": {
    "actions": [actions.READ, actions.PICKUP],
    "message": 'This is a test!',
    "hint": "There's something written on here, maybe I should try reading it."
    }
}

const status = {
  'MENU': 'menu',
  'GAME_START': 'start',
  'OVER': ['win', 'lose'],
  'LOAD': 'load'
}

const actions = {
  'player': {
    "READ": read,
  },
  'game': {
    'LOAD': load
  }
}

const hasAction = (item, action) => {
  if(items[item].actions.includes(action)){
    return true;
  }
  return false;
}

const exits = { NORTH: 'NORTH', SOUTH: 'SOUTH', EAST: 'EAST', WEST: 'WEST' };

const game_locations = {
  'test': {
    'house': {
      'room': {
        'exits': [null, 'kitchen', null, null],
        'hint': 'try going through the south door',

      }
    }
  }
}

const read = (item) => {
  // if item can be read,
  if (hasAction(item, 'read')) { 
    // actually show the user it read the note by displaying its item.message
  }
  else {
    `I cannot do that, try ${item.hint}` //print to screen
    
  }
  // put them on screen
}

const use = () => {

}

const load = () => {

}