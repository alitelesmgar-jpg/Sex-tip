<?php
// ============================================================
// NOIR & OR — LOGOUT
// ============================================================

session_start();

// پاک کردن تمام داده‌های سشن
$_SESSION = array();

// اگر کوکی سشن وجود داره، پاکش کن
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// نابود کردن سشن
session_destroy();

// برگشت به صفحه لاگین
header('Location: login.html?logout=1');
exit();
?>
