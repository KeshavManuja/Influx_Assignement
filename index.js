let totalGroup = [
  
]

function tripGroup(name) {
    // Creating a group with name as per input

    let group={
        title:name,
        members:[]
    };
    
    totalGroup.push(group);
    console.log(totalGroup)
  
}


function AddMember(memberName,groupTitle) {

    // Filtering out the mentioned group if there are multiple groups
    let group = totalGroup.filter((eachGroup)=> {
        return (eachGroup.title==groupTitle);
    })
    
    let membersList=group[0].members;

    // Checking if in the selected group , same name person is present or not
    let flag=true;
    for(member of membersList) {
        if(member.name==memberName) {
            flag=false;
            break;
        }
    }

    if(flag) {
        // If not then create a newMember and push into respective group members list
        let newMember={name:memberName, amount:0};
        membersList.push(newMember);
        console.log(membersList);
    }
    else {
        console.log("Mentioned username is not available, Please try with different username");
        return;
    }


}


function AddExpense(groupTitle,amount,paidBy) {

    let group = totalGroup.filter((el)=> el.title==groupTitle);
    let groupMembers = group[0].members;
    // Calculating amount share of rest of members
    let splittedCost=(amount/(groupMembers.length));
 
    for(let member of groupMembers) {
        
        if(member.name!==paidBy) member.amount+=splittedCost;
    }
    
}

function showExpense(groupTitle) {
    // Filtering out required group
    let group = totalGroup.filter((el)=> el.title==groupTitle);

    let groupMembers = group[0].members;

    // Generating the owes and owned of each user.
    let summary=1;

    console.log(`<<-----Group ${group[0].title} Summary-------->>`)

    for(let i=0; i<groupMembers.length; i++) {

        for(let j=i+1; j<groupMembers.length; j++) {

            let diff=groupMembers[i].amount - groupMembers[j].amount;
            
            if(diff<0) {
                console.log(` ${summary}) ${groupMembers[j].name} owes ${(-diff).toFixed(2)} amount to ${groupMembers[i].name}`);
                summary++;
            }
            else if(diff>0) {
                console.log(` ${summary}) ${groupMembers[i].name} owes ${diff.toFixed(2)} amount to ${groupMembers[j].name}`);
                summary++;
            };
            
        }
    }
 
}



function main() {
    tripGroup("Keshav");

    AddMember("Rohit","Keshav");
    //Checking Duplicate-> It will not added will show error.
    AddMember("Rohit","Keshav");
    AddMember("Nikhil","Keshav");
    AddMember("Shanaya","Keshav");
    AddMember("Bhavani","Keshav");

    AddExpense("Keshav",100,"Rohit");
    AddExpense("Keshav",200,"Bhavani");
    showExpense("Keshav");
    
}

// <<<<-----Function Calls ----->>>>
main();
// bonusRandom()




function bonusRandom() {
    tripGroup("Keshav");

    AddMember("Rohit","Keshav");
    AddMember("Nikhil","Keshav");
    AddMember("Shanaya","Keshav");
    AddMember("Bhavani","Keshav");
    AddMember("Kush","Keshav");
    AddMember("Praful","Keshav");
    AddMember("Sunny","Keshav");
    AddMember("Bhavesh","Keshav");
    AddMember("Sameer","Keshav");
    AddMember("Nikita","Keshav");

    randomExpenses("Keshav")

    showExpense("Keshav")
}

function randomExpenses(groupTitle) {
    
    let randomAmount = Math.floor(totalGroup.length*300*Math.random());
    console.log(`Total amount is ${randomAmount}`)
    
    // Finding specifc group and it's members
    let group = totalGroup.filter((el)=> el.title==groupTitle);
    let groupMembers = group[0].members;


    for(let i=0; i<groupMembers.length; i++) {

        // Taking random amount
        let individualAmt= Math.random()*randomAmount;

        // Adding it to members account
        groupMembers[i].amount =+individualAmt.toFixed(2);
        
        // Subtracting it to get next amount reduced one
        randomAmount-=individualAmt;

        //Putting remaining amount in last person account
        if(i==groupMembers.length-1) groupMembers[i].amount=randomAmount.toFixed(2)
    }

    console.log(groupMembers)
    
}

