<?php
// ============================================================
// NOIR & OR — LOGIN PROCESSOR
// Supports both GET and POST methods
// ============================================================

session_start();

// تنظیم هدر برای UTF-8
header('Content-Type: text/html; charset=utf-8');

// رمز عبور صحیح
$correct_password = 'zizuzizu';

// اطلاعات کاربری پیش‌فرض
$admin_user = array(
    'username' => 'admin',
    'full_name' => 'ادمین اصلی',
    'email' => 'admin@noir-or.com',
    'role' => 'مدیر ارشد',
    'last_login' => date('Y/m/d H:i:s'),
    'member_since' => '۱۴۰۳/۰۱/۰۱',
    'phone' => '۰۹۱۲ ۳۴۵ ۶۷۸۹',
    'avatar' => 'https://ui-avatars.com/api/?name=Admin&background=D4AF37&color=1E1410&size=200&bold=true&font-size=0.4'
);

// دریافت رمز از GET یا POST
$password = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $password = isset($_GET['password']) ? trim($_GET['password']) : '';
}

// اگر رمزی وارد نشده، برگشت به لاگین
if (empty($password)) {
    header('Location: login.html');
    exit();
}

// بررسی رمز عبور
if ($password === $correct_password) {
    // رمز صحیح - ذخیره در سشن
    $_SESSION['is_logged_in'] = true;
    $_SESSION['login_time'] = time();
    $_SESSION['user'] = $admin_user;
    $_SESSION['login_count'] = isset($_SESSION['login_count']) ? $_SESSION['login_count'] + 1 : 1;
    
    // ریدایرکت به پنل مدیریت
    header('Location: dashboard.html');
    exit();
} else {
    // رمز اشتباه - برگشت به صفحه لاگین با ارور
    header('Location: login.html?error=1');
    exit();
}
?>
