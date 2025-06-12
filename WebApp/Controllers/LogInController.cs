using Microsoft.AspNetCore.Mvc;
using WebApp.Models;

namespace WebApp.Controllers;

public class LogInController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Index(LoginViewModel model) 
    {
        if (ModelState.IsValid)
        {
            return View(model);
        }

        return View();
    }
}