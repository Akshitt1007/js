

function one() {
    console.log( "First method running")
}

function two() {
    console.log( "second method running")

    function three(){
        console.log( "Third method is running");
    }
    three()
}

function four(){
    console.log("Fourth method is running");
}

one()
two()
four()

// The call stack is same as java or any other language

/*
===============================
   JS CALL STACK (LIFO MODEL)
===============================

    Initial:
    [empty]

    ▶ one() called

        Stack:
        | one |
        Output: First method running
        → one() ends
        Stack:
        [empty]

    ▶ two() called

        Stack:
        | two |
        Output: second method running

        ▶ three() called (inside two)
            Stack:
            | two   |
            | three |
            Output: Third method is running
            → three() ends

        Stack:
        | two |
        → two() ends
        Stack:
        [empty]

    ▶ four() called
    
        Stack:
        | four |
        Output: Fourth method is running
        → four() ends
        Stack:
        [empty]

    ===============================
    Final State: [empty]
    Call Stack followed LIFO order.
    ===============================

*/
