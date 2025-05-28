using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    public class LogInController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
