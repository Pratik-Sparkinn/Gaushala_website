<?php
require_once('TCPDF-main/tcpdf.php'); // Include TCPDF library

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $donor_name = $_POST['donor_name'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $amount = $_POST['amount'];
    $donation_type = $_POST['donation_type'];
    $date = $_POST['date'];

    // Create new PDF document
    $pdf = new TCPDF();
    $pdf->SetCreator(PDF_CREATOR);
    $pdf->SetTitle('Donation Receipt');
    $pdf->AddPage();

    // Set Header
    $pdf->SetFont('helvetica', 'B', 16);
    $pdf->Cell(0, 10, 'गौशाळा दान पावती', 0, 1, 'C');
    $pdf->Ln(10);

    // Add Logo (Optional - Uncomment if you have a logo)
    // $pdf->Image('logo.png', 10, 10, 30);

    // Donation Details
    $pdf->SetFont('helvetica', '', 12);
    $pdf->Cell(0, 10, "दानकर्त्याचे नाव: $donor_name", 0, 1);
    $pdf->Cell(0, 10, "मोबाइल नंबर: $mobile", 0, 1);
    $pdf->Cell(0, 10, "ई-मेल: $email", 0, 1);
    $pdf->Cell(0, 10, "दानाची रक्कम: ₹$amount", 0, 1);
    $pdf->Cell(0, 10, "दानाचा प्रकार: $donation_type", 0, 1);
    $pdf->Cell(0, 10, "तारीख: $date", 0, 1);
    $pdf->Ln(20);

    // Footer
    $pdf->SetFont('helvetica', 'B', 12);
    $pdf->Cell(0, 10, "श्री उज्ज्वल गोरक्षण संस्था", 0, 1, 'C');
    $pdf->Cell(0, 10, "|| गो सेवा परमो धर्मः ||", 0, 1, 'C');

    // Output PDF
    $pdf->Output('donation_receipt.pdf', 'D');
}
?>
