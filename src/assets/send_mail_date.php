<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header("Access-Control-Allow-Origin: *");

$errors = '';

if(empty($errors))
{



	$from_email = $request->email;
	$message = $request->message;
	$from_name = $request->name;
	$time = $request->time;
	$date = $request->date;
	$phone = $request->phone;

  //webmaster@prosmile.com.ec
	$to_email = "pablo.martinez@fcbandfire.com";

	$contact = "<p><strong>Name:</strong> $from_name</p>
				<p><strong>Email:</strong> $from_email</p>
				<p><strong>Número de Contacto:</strong> $phone</p>
				<p><strong>Hora de Cita:</strong> $time</p>
				<p><strong>Fecha de Cita:</strong> $date</p>";
	$content = "<p>$message</p>";

	$website = 'Reserva de Cita Prosmile';
	$email_subject = "$website:  $from_name ";

	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";

	mail($to_email,$email_subject,$email_body,$headers);

	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	//	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>
