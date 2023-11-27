$(function () {
  let sendBtn = $(".emailForm-area #email-send");
  sendBtn.on("click", function () {
    emailCheck();
  });

  function sendMail() {
    const emailName = $(".emailForm-area #name").val();
    const emailEmail = $(".emailForm-area #email").val();
    const emailMessage = $(".emailForm-area #message").val();

    let templateParams = {
      name: emailName,
      email: emailEmail,
      message: emailMessage,
    };

    emailjs.send("zaqxsw", "template_az2xorw", templateParams).then(
      (response) => {
        alert("메세지를 보냈습니다!");
      },
      (error) => {
        alert("메세지를 보내지 못했습니다 ...", error);
      }
    );
  } // fn sendMail end

  function emailCheck() {
    let nameCheck = $(".emailForm-area #name").val();
    let emailCheck = $(".emailForm-area #email").val();
    let messageCheck = $(".emailForm-area #message").val();
    let flag;

    flag = 1;
    if (nameCheck === "") {
      flag = 0;
      alert("이름을 입력해주세요.");
    } else if (emailCheck === "") {
      flag = 0;
      alert("이메일을 입력해주세요.");
    } else if (messageCheck === "") {
      flag = 0;
      alert("메세지를 입력해주세요.");
    } else if (flag === 1) {
      sendMail();
    }
  } // fn emailCheck end
}); //ready
