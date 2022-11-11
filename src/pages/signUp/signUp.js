import React from "react";

const signUp = () => {
  return (
    <div class="bg-white flex  ">
        <div class=" h-screen flex-1 bg-red-600 bg-primary-600 flex flex-col justify-around">
            <h1 class="font-bold text-5xl text-white mx-4  text-center">A few click anyway from create your book display</h1>
            <div>
                <img
                    alt="Thumbnail"
                    src={require("../../assets/bg_sign_up.png")}
                    class="m-auto"
                />
            </div>
            
            <h4 class="font-pacifico px-20 text-center text-xl " >“Good books, like good friends, are few and chosen;the more select, the more enjoyable.”</h4>
        </div>
        <div class="flex-1">
            <h1 class="text-secondary-gray text-3xl font-bold">Đăng nhập</h1>
            <form>
                <div class="flex">
                    <div>
                        <lable for="first-name" class="text-secondary-gray text-xl font-medium">Họ</lable><br/>
                        <input type="text" id="first-name" name="first-name" class="bg-amber-50 py-2 w-64"/>
                    </div>
                    <div >
                        <lable for="last-name">Tên</lable><br/>
                        <input type="text" id="last-name" class="bg-amber-50 py-2 w-64"/>
                    </div>
                </div>
                
                <lable for="account">Tài khoản</lable><br/>
                <input type="text" id="account"/>
                <lable for="password">Mật khẩu</lable><br/>
                <input type="text" id="password"/>
                <lable for="email">Email</lable><br/>
                <input type="text" id="email"/>
            </form>
            <button>Đăng kí</button>
        </div>
    </div>
  );
};

export default signUp;
