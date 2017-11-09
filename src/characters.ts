interface Serializable<T> {
	deserialize(input: Object): T;
}

class Member implements Serializable<Member> {
    id: number;
    name: string;
    description: string;
    role: string;

	deserialize(input) {
        this.id = input.id;
        this.name = input.name;
        this.description = input.description;
        this.role = input.role;
		return this;
	}
}

class ExampleClass implements Serializable<ExampleClass> {
	mainId: number;
	firstMember: Member;
	secondMember: Member;
	deserialize(input) {
		this.mainId = input.mainId;

		this.firstMember = new Member().deserialize(input.firstMember);
		this.secondMember = new Member().deserialize(input.secondMember);

		return this;
	}
}

var json = {
	mainId: 42,
	firstMember: {
        id: 1337,
        name: "Villager",
        description: "bearded, fat and ugly",
        role: "to live or kill werewolves"

	},
	secondMember: {
		id: -1
	}
};

var instance = new ExampleClass().deserialize(json);
console.log(instance);
