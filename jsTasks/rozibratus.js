function foo(a, b) {
    const [first] = a;
    const { eng } = b;

    return `${first} ${eng}`;
}

const result = foo(["Hello", "Привет"], { ru: "Мир", eng: "World" });

console.log(result);
