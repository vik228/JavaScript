var createPet = function (name)
{
	var sex;
	return {
		setName: function (newName)
		{
			name = newName;
		},
		getName: function ()
		{
			return name;
		},
		getSex: function ()
		{
			return sex;
		},
		setSex: function (newSex)
		{
			if (typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase == "female"))
			{
				sex = newSex;
			}
		}
	}
}
var pet = createPet ("Vivie");
print (pet.getName());
pet.setName ("Oliver");
pet.setSex ("male");
print(pet.getName());
print (pet.getSex());
