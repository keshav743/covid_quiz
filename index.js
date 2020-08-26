const questions = [
    
    {
        q: "How is COVID-19 passed on",
        opt: ["Through droplets that come from your mouth and nose when you cough or breathe out",
        "In sexual fluids, including semen, vaginal fluids or anal mucous",
        "By drinking unclean water",
        "All of the above"],
        correctAnswer: "Through droplets that come from your mouth and nose when you cough or breathe out",
    },
    {
        q: "What are the common symptoms of COVID-19 ",
        opt: ["A new and continuous cough",
        "Fever",
        "Tiredness",
        "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        q: "Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird",
        opt: ["Monkeys",
        "Lizards",
        "Hens",
        "Kites"],
        correctAnswer: "Monkeys",
    },
    {
        q: "In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity",
        opt: ["P-cell","D-Cell","T-Cell","Endothelial Cells"],
        correctAnswer: "T-Cell",
    },
    {
        q: "Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19",
        opt: ["BNT162","PICOVACC","Both A and B","Neither A nor B"],
        correctAnswer: "BNT162",
    },
    {
        q: "What is Coronavirus?",
        opt: ["It is a large family of viruses."," It belongs to the family of Nidovirus.","Both A and B are correct","Only A is correct."],
        correctAnswer: "Both A and B are correct",
    },
    {
        q: "The first case of novel coronavirus was identified in",
        opt: ["Beijing","Shanghai","Wuhan, Hubei","Tianjin"],
        correctAnswer: "Wuhan, Hubei",
    },
    {
        q: " From where coronavirus got its name?",
        opt: ["Due to their crown-like projections.","Due to their leaf-like projections.","Due to their surface structure of bricks.","None of the above"],
        correctAnswer: "Due to their crown-like projections.",
    },
    {
        q: "Which of the following statement is/are correct about Favipiravir?",
        opt: ["Favipiravir is an antiviral COVID-19 drug.","Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.","It is India's first COVID-19 drug launched, priced at Rs 103 per tablet.","All the above are correct"],
        correctAnswer: "All the above are correct",
    },
    {
        q: "How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
        opt: ["More than 50","More than 100","More than 150","More than 200"],
        correctAnswer: "More than 200",
    }
]

var count = 0;
var score = 0;
var wrong = 0;
var attempted = 0;
var person = "";

function hideIntroDiv(){
    person = prompt("What is your name?");
    $('.intro-part').hide();
    $('.question-part').toggle();
    $('.question-html').html(questions[0].q.toString());
    for(var i = 0; i<4; i++){
        $('.opt-'+i).html(questions[0].opt[i].toString());
    }
} 

function nextQuestion(){
    enableButtons(0,1,2,3);
    $('.opt-item-0').css("background-color", "thistle");
    $('#opt-0-id').css("background-color", "thistle");
    $('.opt-item-1').css("background-color", "thistle");
    $('#opt-1-id').css("background-color", "thistle");
    $('.opt-item-2').css("background-color", "thistle");
    $('#opt-2-id').css("background-color", "thistle");
    $('.opt-item-3').css("background-color", "thistle");
    $('#opt-3-id').css("background-color", "thistle");
    count+=1;
    if(count<10){
        $('.question-html').html(questions[count].q.toString());
        for(var i = 0; i<4; i++){
            $('.opt-'+i).html(questions[count].opt[i].toString());
            
        }
    }else{
        $('.question-part').toggle();
        $('.result-div').toggle();
        $('.name-span').html(person.toString());
        $('.score-span').html(attempted.toString());
        $('.correct-span').html(score.toString());
        $('.wrong-span').html(wrong.toString());
    }
}

function enableButtons(a,b,c,d){
    $("#opt-"+a+"-id").prop('disabled', false);
    $("#opt-"+b+"-id").prop('disabled', false);
    $("#opt-"+c+"-id").prop('disabled', false);
    $("#opt-"+d+"-id").prop('disabled', false);
}

function diableButtons(a,b,c,d){
    $("#opt-"+a+"-id").prop('disabled', true);
    $("#opt-"+b+"-id").prop('disabled', true);
    $("#opt-"+c+"-id").prop('disabled', true);
    $("#opt-"+d+"-id").prop('disabled', true);
}

$("#opt-0-id").click(function() {
    if($("#opt-0-id").html() == questions[count].correctAnswer.toString()){
        $('.opt-item-0').css("background-color", "green");
        $('#opt-0-id').css("background-color", "green");
        attempted+=1;
        score+=1;
        console.log("Correct");
    }else{
        $('.opt-item-0').css("background-color", "red");
        $('#opt-0-id').css("background-color", "red");
        attempted+=1
        wrong+=1;
        console.log("Wrong");
    }
    diableButtons(0,1,2,3)
});

$("#opt-1-id").click(function() {
    if($("#opt-1-id").html() == questions[count].correctAnswer.toString()){
        $('.opt-item-1').css("background-color", "green");
        $('#opt-1-id').css("background-color", "green");
        attempted+=1;
        score+=1;
        console.log("Correct");
    }else{
        $('.opt-item-1').css("background-color", "red");
        $('#opt-1-id').css("background-color", "red");
        wrong+=1;
        attempted+=1;
        console.log("Wrong");
    }
    diableButtons(0,1,2,3)
});

$("#opt-2-id").click(function() {
    if($("#opt-2-id").html() == questions[count].correctAnswer.toString()){
        $('.opt-item-2').css("background-color", "green");
        $('#opt-2-id').css("background-color", "green");
        attempted+=1;
        score+=1;
        console.log("Correct");
    }else{
        $('.opt-item-2').css("background-color", "red");
        $('#opt-2-id').css("background-color", "red");
        wrong+=1;
        attempted+=1;
        console.log("Wrong");
    }
    diableButtons(0,1,2,3)
});

$("#opt-3-id").click(function() {
    if($("#opt-3-id").html() == questions[count].correctAnswer.toString()){
        $('.opt-item-3').css("background-color", "green");
        $('#opt-3-id').css("background-color", "green");
        attempted+=1;
        score+=1;
        console.log("Correct");
    }else{
        $('.opt-item-3').css("background-color", "red");
        $('#opt-3-id').css("background-color", "red");
        wrong+=1;
        attempted+=1;
        console.log("Wrong");
    }
    diableButtons(0,1,2,3);
});
 