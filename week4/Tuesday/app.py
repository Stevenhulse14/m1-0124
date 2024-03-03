from tabulate import tabulate

class Person:
    def __init__(self, name, age, weight, height, sex) -> None:
        self.name = name
        self.age = age
        self.weight = weight
        # In centemeters
        self.height = height 
        self.sex = sex


    def printName(self): print(self.name)    

    def kiloGrams(self): return self.weight/2.205

    def meterSq(self): return (self.height/100)**2

    def BMI (self): return self.kiloGrams()/self.meterSq() 

    # Basel Metabolic Rate (BMR)
    def BMR (self): 

        if (self.sex == "F"):
            return 655.1 + (9.563 * self.kiloGrams()) + (1.850 * self.height) - (4.676 * self.age)
        if (self.sex == "M"):
            return 66.47 + (13.75 * self.kiloGrams()) + (5.003 * self.height) - (6.755 * self.age)

    def displayBMR(self)-> None:  

        data = [
            ["name", "age", "height", "weight", "multiplier","BMR" ],
            [self.name,self.age,self.height, self.weight, 1.2, (self.BMR()*1.2)],
            ["Light", "-", "-", "_", 1.375, (self.BMR()*1.375)],
            ["Moderately", "-", "-", "_", 1.55, (self.BMR()*1.55)],
            ["Active", "-", "-", "_", 1.725, (self.BMR()*1.725)],
            ["Very Active", "-", "-", "_", 1.9, (self.BMR()*1.9)]
        ]  
        print(tabulate(data, headers="firstrow"))
        
       



steven = Person('steven', 30, 175, 182.88, "M")      

print(steven.displayBMR())

