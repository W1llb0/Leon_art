<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require_once './PHPMailer/src/Exception.php';
    require_once './PHPMailer/src/PHPMailer.php';
    require_once './PHPMailer/src/SMTP.php';
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    $email = $_POST['email'];
    $phone = $_POST['tel'];

    $mail->isSMTP();
    $mail->Host = 'ssl://smtp.yandex.ru';;
    $mail->SMTPAuth = true;
    $mail->Username = 'leonart01@yandex.ru';
    $mail->Password = 'ktoyfhn01';
    // $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('leonart01@yandex.ru');
    $mail->addAddress('david.biboev@mail.ru');
    $mail->isHTML(true);

    $mail->Subject = 'Заявка на заказ';
    $mail->Body = 'Почта:' .$email . ' телефон:' .$phone;


    // if(!$mail->send()){
    //     echo 'Error';
    // }else{
    //     echo 'Спасибо! Форма отправлена';
    // }
    
    try{
        return $mail->send();
    } 
    catch (Exception $e) {
          echo "{$mail->ErrorInfo}";
          return false;
    }





































    // use PHPMailer\PHPMailer\PHPMailer;
    // use PHPMailer\PHPMailer\Exception;

    // require 'phpmailer/src/Exception.php';
    // require 'phpmailer/src/PHPMailer.php';

    // $mail = new PHPMailer(true);
    // $mail->CharSet = 'UTF-8';
    // $mail->setLanguage('ru', 'phpmailer/language/');
    // $mail->IsHTML(true);

    // // от кого письмо
    // $mail->setFrom('maliev-x8@mail.ru', 'Клиент');
    // // кому отправить 
    // $mail->addAddress('david.biboev@mail.ru');
    // // тема письма
    // $mail->Subject = 'Привет! Я хочу сделать заказ';

    // if(trim(!empty($_POST['email']))){
    //     $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    // }
    // if(trim(!empty($_POST['tel']))){
    //     $body.='<p><strong>E-mail:</strong> '.$_POST['tel'].'</p>';
    // }


    // // отправляем
    // if(!$mail->send()){
    //     $message = 'Ошибка';
    // }else{
    //     $message = 'Данные отправлены';
    // }

    // $response = ['message' => $message];
    
    // header('Content-type: application/json');
    // echo json_encode($response);

    
?>