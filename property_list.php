<?php
session_start();
require "includes/database_connect.php";

$user_id = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : NULL;
$city_name = $_GET["city"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Best PG's in <?php echo $city_name ?> | PG Life</title>

  <?php
  include "includes/head_links.php";
  ?>
  <link href="css/property_list.css" rel="stylesheet" />
</head>

<body>
  <?php
  include "includes/header.php";
  ?>

  <nav aria-label="breadcrumb">
    <ol class="breadcrumb py-2">
      <li class="breadcrumb-item">
        <a href="index.php">Home</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <?php echo $city_name; ?>
      </li>
    </ol>
  </nav>

  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>

  <?php
  include "includes/signup_modal.php";
  include "includes/login_modal.php";
  include "includes/footer.php";
  ?>

  <script>
    ! function(e) {
      function r(r) {
        for (
          var n, a, p = r[0], l = r[1], f = r[2], c = 0, s = []; c < p.length; c++
        )
          (a = p[c]),
          Object.prototype.hasOwnProperty.call(o, a) &&
          o[a] &&
          s.push(o[a][0]), o[a] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        for (i && i(r); s.length;) s.shift()();
        return u.push.apply(u, f || []), t()
      }

      function t() {
        for (var e, r = 0; r < u.length; r++) {
          for (var t = u[r], n = !0, p = 1; p < t.length; p++) {
            var l = t[p];
            0 !== o[l] && (n = !1)
          }
          n && (u.splice(r--, 1), e = a(a.s = t[0]))
        }
        return e
      }
      var n = {},
        o = {
          1: 0
        },
        u = [];

      function a(r) {
        if (n[r]) return n[r].exports;
        var t = n[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return e[r].call(t.exports, t, t.exports, a), t.l = !0, t.exports
      }
      a.m = e, a.c = n, a.d = function(e, r, t) {
        a.o(e, r) || Object.defineProperty(e, r, {
          enumerable: !0,
          get: t
        })
      }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }, a.t = function(e, r) {
        if (1 & r && (e = a(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (a.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
          }), 2 & r && "string" != typeof e)
          for (var n in e) a.d(t, n, function(r) {
            return e[r]
          }.bind(null, n));
        return t
      }, a.n = function(e) {
        var r = e && e.__esModule ? function() {
          return e.default
        } : function() {
          return e
        };
        return a.d(r, "a", r), r
      }, a.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
      }, a.p = "/";
      var p = this["webpackJsonpreact-app"] = this["webpackJsonpreact-app"] || [],
        l = p.push.bind(p);
      p.push = r, p = p.slice();
      for (var f = 0; f < p.length; f++) r(p[f]);
      var i = l;
      t()
    }([])
  </script>
  <script src="js/2.4f706dfe.chunk.js"></script>
  <script src="js/main.db718309.chunk.js"></script>

</body>

</html>

