---
title: "In favour of godot"
date: "2025-09-16"
excerpt: "Why I'm loving godot"
tags: ["Godot", "Game Dev", "Creativity"]
readTime: "3 min read"
image: "/images/Godot_Banner.jpg"
author: "George Nizoridis"
---

# Why I'm Loving the Godot Game Engine

As someone who's dived into game development, I've found Godot to be an absolute game-changer. It's a free, open-source engine that's powerful yet accessible, and after working with it for a while, I can confidently say it's one of the best tools out there for both beginners and experienced developers. In this article, I'll share why Godot has won me over, focusing on its object-oriented programming approach with scripts and nodes, its intuitive systems, and the Python-like syntax of GDScript.

## OOP with Scripts and Nodes

One of the standout features of Godot is its node-based architecture combined with scripting, which perfectly embodies object-oriented programming (OOP) principles. Everything in Godot is a node— from scenes and characters to UI elements and physics bodies. Nodes can be extended with scripts, allowing me to attach behaviors and properties in a modular way.

This setup makes inheritance, encapsulation, and polymorphism feel natural. For instance, I can create a base "Enemy" node with a script handling basic AI, then inherit from it to make specific enemy types like "FlyingEnemy" or "GroundEnemy" with their own tweaks. It's like building with LEGO blocks: I compose complex scenes by nesting nodes, and each can have its own script.

What I love most is how this reduces boilerplate code. In other engines, I might spend hours setting up class hierarchies, but in Godot, it's drag-and-drop with scripts attached. This has sped up my prototyping immensely, letting me focus on creativity rather than setup.

## Intuitive Systems

Godot's systems are designed with intuition in mind, making game development feel straightforward and fun. The editor is clean and user-friendly, with a scene tree that visually represents your game's structure. Dragging nodes into the tree and connecting signals (Godot's event system) is incredibly intuitive—no need for complex wiring or callbacks.

For example, the physics engine is built-in and easy to use. I can add a RigidBody2D node, attach a collision shape, and bam—gravity and collisions just work. The animation system is another highlight; the AnimationPlayer node lets me create timelines for sprites, positions, and even code calls without hassle.

Even more advanced features like shaders and particle systems have intuitive interfaces. I've experimented with custom shaders using Godot's visual shader editor, which abstracts away much of the GLSL complexity. Overall, these systems lower the barrier to entry while providing depth for complex projects, which is why I keep coming back to Godot.

## Python-Style GDScript Syntax

Perhaps my favorite aspect is GDScript, Godot's scripting language. It's dynamically typed and inspired by Python, which means clean, readable code without the verbosity of languages like C#. The indentation-based syntax feels familiar and reduces errors—no more hunting for missing semicolons or braces.

For someone coming from Python, it's a seamless transition. Features like duck typing allow flexible coding, and built-in functions for vectors, colors, and signals make game logic a breeze. Here's a quick example of a simple movement script:

```gdscript
extends KinematicBody2D

var speed = 200
var velocity = Vector2()

func _physics_process(delta):
    velocity = Vector2()
    if Input.is_action_pressed("ui_right"):
        velocity.x += 1
    if Input.is_action_pressed("ui_left"):
        velocity.x -= 1
    velocity = velocity.normalized() * speed
    move_and_slide(velocity)
```

This snippet shows how concise and Python-esque it is—easy to read and modify. I can prototype ideas quickly, and if performance becomes an issue, I can always switch to C# or even native code.

## Conclusion

Godot has transformed how I approach game development. Its OOP structure with scripts and nodes, intuitive systems, and Python-style GDScript make it a joy to work with. Whether I'm building a small jam game or a larger project, Godot empowers me to iterate fast and stay creative. If you're on the fence about trying it, I highly recommend diving in—it's free, community-driven, and constantly improving. Who knows, it might become your go-to engine too!
