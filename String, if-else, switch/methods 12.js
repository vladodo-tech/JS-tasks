let age = 18;
let clubMember = false;
let eventVisit3 = true;
let eventVisit5 = false;

if (age < 18) {
    console.log("Участие в мероприятии не разрешено");
} else if (clubMember == true) {
    console.log("Участие в мероприятии разрешено");
} else if (clubMember == false && eventVisit5 == true) {
    console.log("Участие в мероприятии разрешено + вы получаете VIP-пропуск");
} else if (clubMember == false && eventVisit3 == true) {
    console.log("Участие в мероприятии разрешено");
} else {
    console.log("Участие в мероприятии не разрешено");
}