// Animal 과 Dog 클래스 구현

// Animal 은 name 과 speak 메소드를 가짐
// speak 는 나는 [name] 출력

// Dog 는 Animal 을 상속받고
// breed 속성을가짐 . 개의 품종
// bark 메소드를 가지고 메소드는 "나는 [breed]" 를 출력

class Animal
{
    constructor(name) // 생성자 Animal 를 호출할 때 무엇을 매개변수로 받을지를 정해줘야 한다.
    {
        this.name=name;
    }
    speak(name2)
    {
        console.log(`나는 ${this.name}`);
        return console.log(`마음만은 ${name2}`);
    }
}

class Dog extends Animal
{
    constructor(name, breed)
    {
        super(name);
        this.breed=breed;
    }
    bark(breed2)
    {
        console.log(`나는 ${this.breed}`);
        return console.log(`마음만은 ${breed2}`);
    }
}

const dog1 = new Dog("검둥이", "잡견") // Dog 는 매개변수로 name, breed 를 받기때문에 생성할 때 값을 넣어 줘야 한다.
dog1.speak("흰둥이");
dog1.bark("진돗개");

