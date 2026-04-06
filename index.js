
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  const mergeArgs = args.flat();
  
  combinedObject.users=[...mergeArgs] ;
  
  const todays = new Date();
  const year = todays.getFullYear();
  const month = todays.getMonth() + 1;
  const date = todays.getDate();
  
  combinedObject.merge_date =`${month}/${date}/${year}` ;
  return combinedObject;
  
}
console.log(combineUsers("UserName1","UserName2","UserName3","UserName4","UserName5"));

