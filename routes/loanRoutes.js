const express = require("express");
const loanController = require("../controllers/loanController");
const authController = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

// router.use(authController.protect);

router
  .route("/")
  .get(loanController.getAllLoans)
  .post(
    authController.protect,
    loanController.uploadLoanPhoto,
    loanController.resizeLoanPhoto,
    loanController.createLoan
  );

router
  .route("/upcoming-loans")
  .get(authController.protect, loanController.getComingLoans);

router
  .route("/todays-loans")
  .get(authController.protect, loanController.getTodaysLoans);

router
  .route("/notifications")
  .get(authController.protect, loanController.getNotifications);

router
  .route("/filtered-loans")
  .get(authController.protect, loanController.getFilteredLoans);

router
  .route("/overdue-loans")
  .get(authController.protect, loanController.getOverdueLoans);

router
  .route("/loan-reports")
  .get(authController.protect, loanController.getLoansBetweenTwoDates);

router
  .route("/close-loan/:id")
  .patch(authController.protect, loanController.CloseLoan);

router
  .route("/reopen-loan/:id")
  .patch(authController.protect, loanController.reopenLoan);
router
  .route("/:id")
  .get(loanController.getLoan)
  .patch(
    authController.protect,
    loanController.uploadLoanPhoto,
    loanController.resizeLoanPhoto,
    loanController.updateLoan
  )
  .delete(authController.protect, loanController.deleteLoan);

module.exports = router;
