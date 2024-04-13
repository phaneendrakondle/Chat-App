const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        Password: { type: String, required: true },
        pic: {
            type: String,
            required: true,
            default: "https://www.bing.com/ck/a?!&&p=f7d1b7a3add8a96eJmltdHM9MTcxMjk2NjQwMCZpZ3VpZD0zNTdhZTJmNC04ZTJhLTY5OTgtMzgwNS1mMTdjOGY4NzY4OGMmaW5zaWQ9NTY5Nw&ptn=3&ver=2&hsh=3&fclid=357ae2f4-8e2a-6998-3805-f17c8f87688c&u=a1L2ltYWdlcy9zZWFyY2g_cT1kZWZhdWx0JTIwcHJvZmlsZSUyMHBpYyZGT1JNPUlRRlJCQSZpZD01RUNCNTlDQzc3RjUwQzYzNDVGQTI1MzQ5NTIwMEJBODM2QUUzRjlF&ntb=1"
        }
    },
    {
        timeStamps: true
    }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.Password)
}

userSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password,salt)
})

const User = mongoose.model("User",userSchema);

module.exports = User