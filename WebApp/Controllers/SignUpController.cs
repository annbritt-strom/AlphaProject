using Microsoft.AspNetCore.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class SignUpController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(SignUpViewModel model)
        {
            if (ModelState.IsValid)
            {
                return View(model);
            }

            return View();
        }
    }
}
